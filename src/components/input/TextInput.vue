<template>
  <div
    class="formGroup relative"
    :class="`${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''}  ${
      validate ? 'is-valid' : ''
    } `"
  >
    <label
      v-if="label"
      :class="`${classLabel} ${
        horizontal ? 'flex-0 mr-6 md:w-[100px] w-[60px] break-words' : ''
      }  inline-block input-label `"
      :for="name"
    >
      {{ label }}</label
    >
    <div class="relative" :class="horizontal ? 'flex-1' : ''">
      <input
        :type="types"
        :name="name"
        :placeholder="placeholder"
        :class="`${classInput} ${error && 'border-red-500'} bg-transparent border border-light px-2 text-light rounded-lg input-control w-full block focus:outline-none h-[40px] ${
          hasicon ? 'pr-10' : ''
        } `"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :error="error"
        :id="name"
        :readonly="isReadonly"
        :disabled="disabled"
        :validate="validate"
        v-if="!isMask"
      />
    </div>

    <span
      v-if="error"
      class="mt-2"
      :class="
        msgTooltip
          ? ' inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
          : ' text-red-500 block text-sm'
      "
      >{{ error }}</span
    >
    <span
      v-if="validate"
      class="mt-2"
      :class="
        msgTooltip
          ? ' inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded'
          : ' text-success-500 block text-sm'
      "
      >{{ validate }}</span
    >
    <span class="block text-secondary-500 font-light leading-4 text-xs mt-2" v-if="description">{{
      description
    }}</span>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },
    label: {
      type: String
    },
    classLabel: {
      type: String,
      default: ' '
    },
    classInput: {
      type: String,
      default: 'classinput'
    },
    type: {
      type: String,
      default: 'text'
      //required: true,
    },
    name: {
      type: String
    },
    modelValue: {
      type: String,
      default: ''
    },
    error: {
      type: String
    },
    hasicon: {
      type: Boolean,
      default: false
    },
    isReadonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    validate: {
      type: String
    },
    msgTooltip: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    isMask: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({
        creditCard: true,
        delimiter: '-'
      })
    }
  },
  data() {
    return {
      types: this.type
    };
  },

  methods: {
    toggleType() {
      // toggle the type of the input field
      this.types = this.types === 'text' ? 'password' : 'text';
    }
  }
};
</script>
<style lang="scss"></style>
