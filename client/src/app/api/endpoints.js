export const endpoint = {
    BARBER: {
      GET: '/get-employee',
    },
    SERVICE: {
      GET: '/get-service',
    },
    BOOKING:{
      BOOK: '/book',
      ALL_GET: '/allAppointment',
      GET_BY_GET :(id) =>  `/my/${id}`,
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
