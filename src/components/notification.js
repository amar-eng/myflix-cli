import { toast } from 'react-toastify';

export const notifySuccess = (message) => {
  toast.info(message, {
    autoClose: 5000,
    icon: true,
    theme: 'colored',
    progressClassName: 'toastify-progress-custom',
  });
};
