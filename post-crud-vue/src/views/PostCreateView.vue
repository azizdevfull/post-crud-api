<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    v-model="title"
                    name="title"
                />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea
                    id="description"
                    v-model="description"
                    name="description"
                ></textarea>
            </div>
            <div>
                <label for="image">Image</label>
                <input
                    type="file"
                    id="image"
                    @change="handleImageUpload"
                    name="image"
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { usePostStore } from "@/stores/post";
import router from "@/router";

export default {
    setup() {
        const postStore = usePostStore(); // Use the Pinia store
        const title = ref("");
        const description = ref("");
        const image = ref(null);

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                image.value = file;
            }
        };

        const handleSubmit = async () => {
            const formData = new FormData();
            formData.append("title", title.value);
            formData.append("description", description.value);
            if (image.value) {
                formData.append("image", image.value);
            }

            try {
                await postStore.createPost(formData); // Use the store's action
                router.push("/posts");
            } catch (error) {
                console.error("Error creating post:", error);
            }
        };

        return {
            title,
            description,
            image,
            handleImageUpload,
            handleSubmit,
        };
    },
};
</script>

<style>
/* Add any styling here if needed */
</style>
