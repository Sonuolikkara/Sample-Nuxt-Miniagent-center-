<script setup lang="ts">
import type { Agent } from "~/types/agent";

const props = defineProps<{ agent: Agent }>();

const emit = defineEmits<{
  changeStatus: [];
}>();
</script>

<template>
  <div class="agent-card">
    <div class="agent-info">
      <h3>{{ props.agent.name }}</h3>
      <p>{{ props.agent.email }}</p>
    </div>

    <div class="agent-actions">
      <AgentStatusBadge
        :status="props.agent.status"
        @change-status="emit('changeStatus')"
      />
    </div>
  </div>
</template>

<style scoped>
.agent-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #eee;
}

.agent-info h3,
.agent-info p {
  margin: 5px 0;
}

.agent-info p {
  color: #777;
}

.agent-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 650px) {
  .agent-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>