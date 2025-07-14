import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {


  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={null}
      showIngestForm={false}
      showIntermediateStepsToggle={false}
      placeholder={
        '"When is the next discovery call of NeuroMastery Bootcamp?"'
      }
      emoji="🟣"
    />
  );
}
