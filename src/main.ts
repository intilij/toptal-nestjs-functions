import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    "projectId": "nestdemo-1194f",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpnfdkJoOth0qu\nZWAw9Aau7bR9teqJRScsS4AbK1nTUbF21J4F2x1uYg0Ypne61HUmK9/2gM4S9Jav\n8Tyziht7B+cAJGmQLWUh7FTkS/ir/iRbe2C98HuSCQgAebgqEMh+GdrRUg9cAg/H\nkOJte4upHPHkmOzkoYZq+abzWVIf4YCcZ22Nw/MFYkpBARKol0uhzDX020bGpKQM\nS2n8f98TSzVphfRaMLyZbYkDRPGwfSO+oI8V/bqH0EYXPnFbEvjyW0eEpVAmE76A\np1pcwS2LE9OLwCmopFH0IYJj5yuS6XabT0NFkXkMWNTQduEsElLvcnaJdAW4q/c/\nAu9pmH8TAgMBAAECggEAFo5EuovonswdojG+uqGoNSK73Uwl9VPF8N+0e+sQyyrS\nDzHltMiiuNIJIN4oJToqIKHDB/iiICMzAV3LViv5dBGGDikPc11oRedpjHlOH/am\n6Zl2wVM2VLOmhohtOmW21eYGwiF09i83+TUiurgsLdg4ZEsXl3BSm08elweCusaw\n/Bl6CO00Tmb/PinOac3mH6Xsi3bQvyp2kYf1Z99vEyJSDlvkdvjyaEhsrBcQOB7n\niJDtX0ZY+N3EN1w/fbt6NYssQ7Q/prrdhZ8sfaOnNhbR5x31bJFNIjLA/MXL7XSw\n+M2CXDOoa0LZb2VHHmhVaR3mxVNOavkxnk+83KHL0QKBgQD0zAfEsvxYwLDZwNjO\n8UQIImjDlTCnsf3WUFPzS+lvBR5Wztd0HuHbN07luETMsB89dDu2J7PRTUNG67uI\nuSik9ci5iys5FrusLOiUhBGX1sYEIg+mIpjMTh6wO6l9do/NmgksxNUSja4QxxC/\n5yRsi1wbjVdR+7KRL2kAdQrZlwKBgQD0TvSFsEwsSbSodplkqhdO7MzfJhCAYdQH\np1giwUl3Dkv9cBcCnbV1JlJq26OtmncP4uaW7ZaHJH7n80Gj64JWiNstAKAQwetk\nXyy3UEG7Z7VNICB6jZbe0j5wn/Kgh/FPhFItm5lfC7dHi+9j4BUWJzwEmTbZID2e\nZeY4s+hd5QKBgF2a9w1784pshDN/zmezUfRaU/0Vuzkkko+0v6U0zdop9uPyy+gX\nNv4ANCcbQxOR9SAmpf6NR/EsviEMWvV499W8NjjcwnZd/v1jXrwLlD6fXbCO5bT9\nXbgh1xJEfhb/kxVnZUK9MUya6Ih51inLVN48m8fdUBqFSE7D9j66gp+ZAoGBAKVK\nVf2tTZwZMfVYaGfG/IYViHbhlgCGL6IOAn9hLocyUQ9jKu5GLWLZTqGlgJQQEcXZ\nyhELJfDBLGtaFWsGB+TsKv3DkohD6zK5gdN0pURZ4jwQJGlGKnEO5dflH46k6wrV\nh5P71kSL9LCfaJO2JA4c9WpXDtjQC2CDqMNsVSZRAoGAcuSju7ovZwzHyVvGA8s5\nv1rei9ZamICKFgZH2Xz4s2C/esgymredHykmmWJNlBOuoPk6w4dq5bSzZrj6bdLd\nDdzXU1EfG9XMj1X158U7M8o0iMuhjykB261nhXd+Ps3Q5AtnGsxvKoeaeUN+F1wj\nL/SvkuIVJgXvRbiz9wYnpXc=\n-----END PRIVATE KEY-----\n",
    "clientEmail": "firebase-adminsdk-ydolc@nestdemo-1194f.iam.gserviceaccount.com"
  };

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: "https://nestdemo-1194f-default-rtdb.firebaseio.com/",
  });

  app.enableCors({
    origin: true
  });

  await app.listen(3000);
}
bootstrap();

/* This is a test of an initial code change. */
