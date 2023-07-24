import { AxiosResponse } from 'axios';
import apiClient from './axiosConfig';

const getPortalMenu = async () => {
  const response: AxiosResponse = await apiClient.get('');
  console.log(response);
};

export default getPortalMenu;
