import recepiesApi from '../../api/recepies-api';

const getRecepies = () => {
  const resData = recepiesApi.getRecepiesList();

  return {
    type: 'recepies/get',
    payload: resData,
  };
};

export default getRecepies;
