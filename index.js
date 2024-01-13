const express = require('express');
//const { RtcRole, RtcTokenBuilder } = require('agora-access-token');
const {RtcTokenBuilder, RtcRole, RtmTokenBuilder, RtmRole} = require('agora-token')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/generateToken', (req, res) => {
    const appID = '11efb81da2e0405cb0f4b1c159b66e0d';
    const appCertificate = 'd27f2a3af1ff4fc9b58e5be80752942c';
    const channelName = req.query.channelName;
    const uid = req.query.uid;
    const role = RtcRole.PUBLISHER ; // Use RtcRole.SUBSCRIBER for audience role //PUBLISHER

    const expirationTimeInSeconds = 3600;

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
