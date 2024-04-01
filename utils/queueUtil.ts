/**
 * @author: Robert
 * @description: The function will make sure the same name processFn will run sync.
 * prop name is the name
 * value is array, the item of array include obj, processFn two elements
 */
const queues: JobQueues = {};

interface Job {
  resolve: (result: any) => void;
  reject: (error: any) => void;
  jobRunner: () => any;
}
interface JobQueues {
  [queueName: string]: Job[];
}

/**
 * queue and await some jobs
 * @param name queueName
 * @param params params passing to func
 * @param jobRunner func.call(null, params)
 */
export const queueJobs = <T>(name: string, jobRunner: () => Promise<T>): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    const run = async () => {
      if (!queues[name]) {
        queues[name] = [];
      }
      const queue = queues[name];
      queue.push({ jobRunner, resolve, reject });
      // If the queue have only one item, it means other items have finished.
      // So we can process at once
      // If the queue have more than one items. It means the function is processing queue
      // in before request. We just simple return and wait.
      if (queue.length === 1) {
        let item: Job | null = queue[0];
        while (item) {
          try {
            item.resolve(await item.jobRunner());
          } catch (ex) {
            // If processFn has error, The function also need invoke reject to handle error
            item.reject(ex);
          }

          queue.shift();
          if (queue.length > 0) {
            item = queue[0];
          } else {
            item = null;
          }
        }
      }
    };

    run();
  });
};

export default queueJobs;
