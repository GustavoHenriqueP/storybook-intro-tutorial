import { fn } from '@storybook/test';
import Task from './Task';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task, // the componente itself
  title: 'Task', // how to group or categorize the component in the Storybook sidebar
  tags: ['autodocs'], // to automatically generate documentation for our components
  //👇 Our exports that end in "Data" are not stories. (ActionsData)
  excludeStories: /.*Data$/, // additional information required by the story but should not rendered in Storybook
  args: {
    // define the action args that the component expects to mock out the custom events
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
