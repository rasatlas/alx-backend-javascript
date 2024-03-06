import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
