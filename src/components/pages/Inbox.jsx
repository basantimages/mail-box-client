import { useSelector } from "react-redux";

import BoxUI from "../UI/BoxUI";
import Heading from "../UI/Heading";
import NoItem from "../UI/NoItem";
import MailCard from "../UI/MailCard";

const Inbox = () => {
  const inbox = useSelector((state) => state.mailBox.inbox);
  const inboxArr = [];
  for (const key in inbox) {
    inboxArr.push(inbox[key]);
  }

  return (
    <BoxUI>
      <Heading label="Inbox" />
      {inboxArr.length === 0 && <NoItem label="Inbox" />}
      {inboxArr.length !== 0 &&
        inboxArr.map((inbox) => {
          return (
            <MailCard
              key={inbox.id}
              id={inbox.id}
              toOrFrom="From"
              mail={inbox.from}
              subject={inbox.subject}
              mailBody={inbox.mailBody}
            />
          );
        })}
    </BoxUI>
  );
};

export default Inbox;
