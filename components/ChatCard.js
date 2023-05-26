import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import saveNote from '../api/crudNotes';

function ChatCard({ input, response }) {
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  const handleClick = () => {
    const payload = {
      uid: user.uid,
      input,
      response,
    };

    saveNote(payload).then(() => setSaved(true));
  };

  return (
    <Card className="m-1">
      <Card.Header>{input}</Card.Header>
      <Card.Body>
        <Card.Text>
          {response}
          {saved ? '' : <Button variant="success" onClick={handleClick}>Save</Button>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ChatCard.propTypes = {
  input: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
};

export default ChatCard;
