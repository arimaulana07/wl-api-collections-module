interface EndPointProperties {
  url: string,
  method: 'get' | 'post',
}

interface EndPoint {
  [key: string]: EndPointProperties,
  requestToken: EndPointProperties,
  departure: EndPointProperties,
  destination: EndPointProperties,
}

export const endpoint: EndPoint = {
  requestToken: {
    url: '/client_token.php',
    method: 'post'
  },
  departure: {
    url: '/outletasal',
    method: 'get'
  },
  destination: {
    url: '/outlettujuan',
    method: 'get'
  }
}
