import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            agent and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li>
          🛠️
          <span className="ml-2">
            The agent has memory and access to a search engine and a calculator.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/agents/route.ts</code>.
          </span>
        </li>
        <li>
          🦜
          <span className="ml-2">
            By default, the agent can handle questions on NeuroMastery Bootcamp, but you
            can edit the prompt to whatever you want!
            <br />
            <b>Try asking "Find Similar Courses"</b>
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/agents/page.tsx</code>
            .
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>When is the next discovery call of NeuroMastery Bootcamp?</code> below!
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );

  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I'm a conversational agent! Ask, 'When is the next discovery call of NeuroMastery Bootcamp?'"
      emoji="🟣"
      showIntermediateStepsToggle={true}
    />
  );
}
