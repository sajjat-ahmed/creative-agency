import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { UserContext } from '../../../App';
import fixUser from '../../../images/user.png';

const Feedback = ({ feedback }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="col-md-4">
      <div>
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="flex-start"
          p={1}
          m={1}
          css={{ height: 10 }}
        ></Box>
        <Box p={1} ></Box>
        <Card >
          <CardHeader
            avatar={
              <Avatar >
                <img style={{ height: '64px' }} src={fixUser} alt="" />
              </Avatar>
            }
            title={feedback.name}
            subheader={feedback.company}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {feedback.description}
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
};

export default Feedback;