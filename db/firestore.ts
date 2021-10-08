import google from '@google-cloud/firestore';

export const firestore = new google.Firestore({
  projectId: 'tb-site-327505',
  keyFilename: process.env.FIRE_STORE_SECRET,
});
