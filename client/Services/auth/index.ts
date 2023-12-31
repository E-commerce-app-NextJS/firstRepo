
import axios from 'axios';

export const register_me = async (formData : any) => {
    try {
        const response = await axios.post('http://localhost:8000/auth/register', formData);
        return response.data;
    } catch (error) {
        console.error('Error in register (service) => ', error);
        throw error; 
    }
};

export const login_me = async (formData : any) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
  
      return response.data;
    } catch (error) {
      console.log('error in login service', error);
    }
  };



// export const forget_password = async (formData : any) => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgetPassword`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log('error in forget Password (service) => ', error);
//     }
// }

