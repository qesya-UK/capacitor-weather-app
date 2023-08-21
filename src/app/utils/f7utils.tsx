import { getDevice } from 'framework7/lite/bundle';

const device = getDevice();

export const getSafeAreaClass = () => {
    return device.ios ? 'safe-area-top' : '';
};