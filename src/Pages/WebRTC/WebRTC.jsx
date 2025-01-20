import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import {
  endConsultancy,
  verifyConsultancy,
} from "../../Features/Slices/consultancySlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { usePeerJs } from "../../Hooks/usePeerjs";

const generatePeerId = (id, paramId) => {
  const myPeerId = `${id}_${paramId}`;
  const remoteUserPeerId = `${paramId}_${id}`;

  return { myPeerId, remoteUserPeerId };
};
function Videocall() {
  const dispatch = useDispatch();
  const { consultancyCardId, peerId } = useParams();
  const loggedinUser = useSelector(selectStudentInfo);
  const { myPeerId, remoteUserPeerId } = generatePeerId(
    loggedinUser._id,
    peerId
  );
  const { currentCall, myVideo, userVideo, callUser, endCall } = usePeerJs(
    myPeerId,
    remoteUserPeerId
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isConsultancyVerified, setIsConsultancyVerified] = useState(false);

  const handleEndCall = () => {
    dispatch(endConsultancy({ consultancyCardId: consultancyCardId }));
    endCall();
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(verifyConsultancy({ consultancyCardId: consultancyCardId }))
      .unwrap()
      .then((res) => {
        setIsConsultancyVerified(res?.data);
        setIsLoading(false);
      });
  }, [consultancyCardId, dispatch]);

  if (isLoading) return <Typography>Loading...</Typography>;
  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        {isConsultancyVerified ? (
          <>
            <Button
              onClick={() => callUser(remoteUserPeerId)}
              variant='contained'
            >
              Call
            </Button>
            <Button
              color='error'
              onClick={handleEndCall}
              disabled={!currentCall}
              variant='contained'
            >
              End Call
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  borderRadius: 5,
                  flex: 1,
                  overflow: "hidden",
                  width: "500px",
                  height: "400px",
                }}
              >
                <video
                  ref={myVideo}
                  autoPlay
                  playsInline
                  muted
                  style={{ width: "100%", borderRadius: "5px", height: "100%" }}
                />
                <Typography mt={2} variant='h6'>
                  {loggedinUser.firstName || "My Video"}
                </Typography>
              </div>
              <div
                style={{
                  borderRadius: 5,
                  flex: 1,
                  overflow: "hidden",
                  width: "500px",
                  height: "400px",
                }}
              >
                <video
                  ref={userVideo}
                  autoPlay
                  playsInline
                  style={{ width: "100%", borderRadius: "5px", height: "100%" }}
                />
                <Typography mt={2} variant='h6'>
                  {currentCall ? "Supervisor" : "No Active Call"}
                </Typography>
              </div>
            </div>
          </>
        ) : (
          "Your consultancy is expired"
        )}
      </Container>
    </div>
  );
}

export default Videocall;
