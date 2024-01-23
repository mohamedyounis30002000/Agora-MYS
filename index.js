const express = require('express');
//const { RtcRole, RtcTokenBuilder } = require('agora-access-token');
const {RtcTokenBuilder, RtcRole, RtmTokenBuilder, RtmRole} = require('agora-token')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/generateToken', (req, res) => {
    //const appID = '11efb81da2e0405cb0f4b1c159b66e0d';
    const appID = req.query.appID;
    //const appCertificate = '76bf6543723d4963a0d33c2a25999da2';
    const appCertificate = req.query.appCertificate;
    const channelName = req.query.channelName;
    //const uid = req.query.uid;
    //const uid = 2882341273;
    const uid = req.query.appUid;
    //const account = "2882341273";
    const account = req.query.appUid;
    const role = RtcRole.PUBLISHER ; // SUBSCRIBER //PUBLISHER

    const expirationTimeInSeconds = 3600 *24;
    
    const key = RtcTokenBuilder.buildTokenWithUid(
        appID,
        appCertificate,
        channelName,
        uid,
        role,
        expirationTimeInSeconds
    );

    res.json({ key });
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
