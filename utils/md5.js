import md5 from "md5";

const publicKey = 'e49bea4a6ee3e35352198237a08be003'
const privateKey = '2934750754dad01a8e7a0d7eb427f43e78d67292';

export default function (parm) {
    return md5(parm + privateKey + publicKey)
}
 