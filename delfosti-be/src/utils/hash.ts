import * as crypto from 'crypto';

export class HashBuild {
  async hashConstructor(text: string): Promise<any> {
    const hash = crypto.pbkdf2Sync(
      text,
      '$p5k2$1f4$secretkey',
      500,
      24,
      'ssl3-sha1',
    );

    return hash.toString('base64');
  }
}
