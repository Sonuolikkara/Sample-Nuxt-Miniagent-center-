<script setup lang="ts">
import type { AgentStatus } from "~/types/agent";

// Receive status from the parent component
const props = defineProps<{
  status: AgentStatus;
}>();

const emit = defineEmits<{
    changeStatus: [];   
}>();

</script>

<template>
  <span
    class="status"
    :class="props.status.toLowerCase()"
  >
    {{ props.status }}
  </span>

  <button @click="emit('changeStatus')">
    Change Status 
    </button>
</template>

<style scoped>
.status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.available {
  background: #dcfce7;
  color: #166534;
}

.busy {
  background: #fef3c7;
  color: #92400e;
}

.offline {
  background: #e5e7eb;
  color: #374151;
}

button {
  padding: 9px 14px;
  border: none;
  border-radius: 5px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

</style>
