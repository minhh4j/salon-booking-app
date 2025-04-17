export const endpoint = {
    BARBER: {
      GET: '/get-employee',
    },
    SERVICE: {
      GET: '/get-service',
    },
    ADMIN: {
      BARBER: {
        ADD: '/add-employee',
        DELETE: (id) => `/delete-employee/${id}`,
      },
      SERVICE :{
        DELETE: (id) => `/delete-service/${id}` ,
        ADD : '/add-service',
      }
    },
  };
  