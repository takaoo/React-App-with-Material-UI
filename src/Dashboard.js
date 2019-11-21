import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CTX } from './Store';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey',
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px',
    },
    topicBox: {
        width: '30%',
        padding: '10px',
    },
    topicButton: {
        width: '15%',
    },
    userBox: {
        width: '20%',
        padding: '10px',
    },
    chatBox: {
        width: '65%',
        padding: '10px',
    },
    button: {
        width: '15%',
    },
}));

function Dashboard() {

    const classes = useStyles();

    // CTX store
    const { allChats, sendChatAction, addTopicAction } = React.useContext(CTX);
    const topics = Object.keys(allChats);

    // local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');
    const [userValue, changeUserValue] = React.useState('');
    const [addTopicValue, changeAddTopicValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat
        </Typography>
                <Typography variant="h5" component="h5">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem
                                        onClick={e => changeActiveTopic(e.target.innerText)}
                                        key={topic}
                                        button
                                    >
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip
                                        label={chat.from}
                                        className={classes.chip}
                                    />
                                    <Typography
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {chat.msg}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="add topic"
                        className={classes.topicBox}
                        value={addTopicValue}
                        onChange={e => changeAddTopicValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.topicButton}
                        onClick={() => {
                            addTopicAction(addTopicValue);
                            changeAddTopicValue('');
                        }}
                    >
                        add
          </Button>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="user name"
                        className={classes.userBox}
                        value={userValue}
                        onChange={e => changeUserValue(e.target.value)}
                    />
                    <TextField
                        label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                            sendChatAction({
                                from: userValue,
                                msg: textValue,
                                topic: activeTopic
                            });
                            changeTextValue('');
                            changeUserValue(userValue);
                        }}
                    >
                        Send
          </Button>
                </div>
            </Paper>
        </div>
    );
}

export default Dashboard;