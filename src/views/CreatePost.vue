<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <form @submit.prevent="onSubmit" class="space-y-4">
          <TextInput
            label="Title"
            type="text"
            placeholder="Title"
            name="title"
            v-model="title"
            :error="titleError"
            classInput="h-[48px]"
          />

          <TextInput
            label="Author"
            type="text"
            placeholder="Author"
            name="author"
            v-model="author"
            :error="authorError"
            classInput="h-[48px]"
          />

          <TextArea
            label="Content"
            type="text"
            placeholder="Content"
            name="description"
            v-model="description"
            :error="descriptionError"
            classInput="h-[48px]"
            :rows="6"
          />

          <div class="pt-4 w-full flex justify-end">
            <button
              :disabled="isLoading"
              type="submit"
              class="bg-green max-w-max font-bold text-[16px] text-light py-2 px-6 rounded-lg block w-full text-center disabled:opacity-60"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextInput from '@/components/input/TextInput.vue';
import TextArea from '@/components/input/TextArea.vue';
import { usePostStore } from '@/stores/post';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';
import { uuid } from 'vue-uuid';
// import { IPost } from '@/utils';
import { useRouter } from 'vue-router';

const store = usePostStore();
const router = useRouter();
const isLoading = ref(false);
const schema = yup.object({
  title: yup.string().required('This field is required'),
  author: yup.string().required('This field is required'),
  description: yup.string().required('This field is required')
});

const formValues = {
  id: '',
  title: '',
  author: '',
  description: ''
};

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: formValues
});

const { value: title, errorMessage: titleError } = useField('title');
const { value: author, errorMessage: authorError } = useField('author');
const { value: description, errorMessage: descriptionError } = useField('description');

const onSubmit = handleSubmit((values) => {
  console.log('🚀 ~ onSubmit ~ values:', values);
  store.addPost({
    ...values,
    id: uuid.v1()
  });
  resetForm();
  router.push('/');
});
</script>

<style scoped></style>
