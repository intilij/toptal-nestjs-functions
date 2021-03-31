import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    "projectId": "nestdemo-1194f",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDH2v5jZmoPuf02\nfnDPAFMdQLIjlkAu6D59BMuP5+CrmnQ8d7qiMdQOjXFOz+HWKI3m4kt3TSNHQPAu\noIeWfEZySKnXm1BskaAghmD7bM86CQVU1GJZW9XFyINDvVRnqYwY6lfBgyIYs8sQ\nqqnS2kcrp0lH7grY1cdp7YZIq7hiYYQjiAY/zN4vA9EQ7NWB+Fug5kLIWGDroRmz\nd2OAOTht1b6utIBSZsCE0MPeQLvb6fS6UGkfBs7OTIZDaEuLdPRT/IIV5Fn+5g65\noTocTDGWat1IH+5uU+M0f+K2kQVuWC1p3bs9bJTPXIVUttI7U1vd4xcUVDoFB4//\ndeN+H4ztAgMBAAECggEABIpsNzPvevX908whogJe4Q5EPdy/DpHGQa7nNRjOmPeE\nZo9N1TuOltoN1f2RIv1+490GW+qLv6WxD04kZn3iV9xgx35G4ICag8Kp12yMdMQZ\ns+izZ1ZX0AuTN+nITiajATnpzoK9NpR3K6TFAP5mmY5OcuzsoCqTQkvcPjBwmwOT\n5qadk0cv0rCTnTbqu0ok+QtgLRbxEwb+PnkCm2InX0uHprJAqp862iC7Wrrs0fw9\no7rHTPDwZB8MGcU52KcBo4tdFlk4Qy8+tukK/EHeaT33KOimLfQ5MDvQjFfSRU4e\ntMBawhixyHxjS1UMNwO0l7THSJK+92lfqZDFwB5qfQKBgQDkFDLmgc04k4pL+Zb3\nGdsrNB6biWw6LQcVSkOPwqYvFhmzkUnbQaa/srt51jZc0R+X9inni3BiNNFao4N9\nwnwUTAe4YQvWy5c0ec4+XitFo1AdeWdq/nzHBWo4IhZ3G2mpTTIuDqZtG0gg2EYd\njRxhXmPL/4EEyCZDNQAIk3CPuwKBgQDgUkuhDMhE1Vh1I0dvpl+CDtj65Pvww79z\nZWBXtpED75A2DtG9KCZj9hZo5h9sd8gxGgrSFjYWdBj2L72rl6eA3ElEgxsdhZL0\nAwDn617fYT7I8PeYevJACcaeAI685QC9Csd88al2wlH6+INaEGYneOZzmIQzUcv3\n3oBJ1CHndwKBgQCtXEUMPGFWvZ6C/SWokLiscCNLqfrfhVY68oXEAfn7FFtYx/hR\ndedfEmW5x/7uMe5HvU5AtxYnL2pp8JuDvY4+h0Pe+7TaAUnfEy6W7VEKz4WXwa2/\n/8usIwuHuzFEO0vm6cxYgb4ydGgwvvMchyOpRuuoJX9VuSSMNP7fheIq/QKBgQDC\ndfUEFx2htkUpvryVyGexSofE8C6L6FWWhsJ/J1ANVmbwxeYCkcS+ET4aD6wcDrao\nAkhxGTooOtrMyFQnZZ+asNx/HRyrefkLuXLWmg8znIyeC27Ia4SICTF6FUen7um1\n95s58BEVV51T8I2FzQORolg8y3GHP5iPNv6FgfUmPwKBgQC7yN6qkuSjktbFhL8c\nwkQPONfzmExsMw9ZZRNKDLME12EgDrvV70paWw6dPBMk/dsXgFz/5ONhgWD65qtR\nCk/uHxbouFxjUAiEoc1QcmLsj3m2al07E5Qq5h0Dr1RfYvEUAGWIy1MdVcee40Kp\n4VUiwOQTLo9uwpWUygZIR02Yag==\n-----END PRIVATE KEY-----\n",
    "clientEmail": "firebase-adminsdk-ydolc@nestdemo-1194f.iam.gserviceaccount.com"
  };

  const bob = "xxx";

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: "https://nestdemo-1194f-default-rtdb.firebaseio.com/",
  });

  await app.listen(3000);
}
bootstrap();

/* This is a test of an initial code change. */
