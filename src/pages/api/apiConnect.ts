import { BskyAgent } from "@atproto/api";


const agent = new BskyAgent({
  service: "https://bsky.social",
});
await agent.login({
  identifier: "email",
  password: "senha",
});



export default function post(text: string) {
  agent.post({
    text: text,
    createdAt: new Date().toISOString(),
  });
};
