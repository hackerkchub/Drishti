import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const initialMessages = [
  { id: 1, who: "them", text: "Hi! How can I help you today?", time: "10:00 AM", avatar: "https://i.pravatar.cc/48?img=32" },
  { id: 2, who: "me", text: "Hi — I wanted to ask about a consultation.", time: "10:01 AM" },
  { id: 3, who: "them", text: "Sure — which category are you looking at? Astrology or Health?", time: "10:02 AM", avatar: "https://i.pravatar.cc/48?img=32" },
  { id: 4, who: "me", text: "Astrology — career related reading.", time: "10:03 AM" },
  { id: 5, who: "them", text: "Got it. We have expert slots available now.", time: "10:04 AM", avatar: "https://i.pravatar.cc/48?img=32" },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 200;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes().toString().padStart(2, "0");
    const ampm = hh >= 12 ? "PM" : "AM";
    const hour12 = hh % 12 === 0 ? 12 : hh % 12;
    const time = `${hour12}:${mm} ${ampm}`;

    const newMsg = {
      id: Date.now(),
      who: "me",
      text: text.trim(),
      time,
    };

    setMessages((prev) => [...prev, newMsg]);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          who: "them",
          text: "Thank you — we will connect you shortly.",
          time,
          avatar: "https://i.pravatar.cc/48?img=32",
        },
      ]);
    }, 700);

    setText("");
  };

  return (
    <Page>
      <Header>
        <Profile>
          <Avatar src="https://i.pravatar.cc/48?img=32" alt="avatar" />
          <div>
            <Name>Drishti Support</Name>
            <Status>online</Status>
          </div>
        </Profile>
        <HeaderActions>
          <SmallBtn>⋯</SmallBtn>
        </HeaderActions>
      </Header>

      <Messages ref={messagesRef}>
        {messages.map((m) => (
          <MessageRow key={m.id} me={m.who === "me"}>
            {m.who === "them" && <MsgAvatar src={m.avatar} />}
            <Bubble me={m.who === "me"}>
              <span>{m.text}</span>
              <Time>{m.time}</Time>
            </Bubble>
            {m.who === "me" && <Spacer />}
          </MessageRow>
        ))}
      </Messages>

      <Composer onSubmit={handleSend}>
        <ComposerInner>
          <AttachBtn type="button" title="Attach">📎</AttachBtn>
          <TextInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message"
          />
          <SendBtn type="submit" title="Send">➤</SendBtn>
        </ComposerInner>
      </Composer>
    </Page>
  );
};

export default ChatPage;

/* ================== STYLES ================== */

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(180deg, #f6f7fb, #ffffff);
  overflow: hidden;
`;

/* header */
const Header = styled.header`
  position: sticky;
  top: 0;
  background: linear-gradient(90deg, #0a0a2a, #1c1c4d);
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);

  @media (max-width: 640px) {
    padding: 10px 12px;
  }
`;

const Profile = styled.div`
  display:flex;
  gap:12px;
  align-items:center;
`;

const Avatar = styled.img`
  width:44px;
  height:44px;
  border-radius:50%;
  object-fit:cover;
  border: 2px solid rgba(255,255,255,0.14);

  @media (max-width: 640px) {
    width:38px;
    height:38px;
  }
`;

const Name = styled.div`
  font-weight:700;
  font-size:1rem;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const Status = styled.div`
  font-size:0.78rem;
  color: #d0d7ff;
  opacity:0.9;
`;

const HeaderActions = styled.div``;
const SmallBtn = styled.button`
  background:transparent;
  border:0;
  color:white;
  font-size:20px;
  cursor:pointer;
`;

/* messages area */
const Messages = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 14px;
    gap: 10px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`;

/* message row */
const MessageRow = styled.div`
  display:flex;
  align-items:flex-end;
  gap:10px;
  justify-content: ${(p) => (p.me ? "flex-end" : "flex-start")};
`;

const MsgAvatar = styled.img`
  width:32px;
  height:32px;
  border-radius:50%;
  object-fit:cover;
`;

/* bubble */
const Bubble = styled.div`
  max-width: 74%;
  padding: 10px 12px;
  border-radius: 12px;
  background: ${(p) => (p.me ? "#dcf8c6" : "white")};
  color: #222;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  line-height: 1.3;
  span { display: block; }

  @media (max-width: 640px) {
    max-width: 80%;
    font-size: 0.9rem;
  }
`;

const Time = styled.div`
  font-size: 0.68rem;
  color: #666;
  margin-top: 6px;
  text-align: right;
`;

const Spacer = styled.div`
  width:34px;
  height:34px;
`;

/* composer */
const Composer = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  padding: 12px 14px;
  border-top: 1px solid #ddd;
  box-shadow: 0 -3px 12px rgba(0, 0, 0, 0.06);
  z-index: 50;
`;
const ComposerInner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const AttachBtn = styled.button`
  background: transparent;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem;
  background: #f8f8f8;
  transition: 0.2s ease;
  &:focus {
    border-color: #00a884;
    background: white;
  }
`;


const SendBtn = styled.button`
  background: #00a884;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 3px 8px rgba(0, 168, 132, 0.25);
  transition: 0.2s ease;
  &:hover {
    background: #029a77;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;