export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    photo?: string; // Adicionando a propriedade photo para a imagem do usuário
  }