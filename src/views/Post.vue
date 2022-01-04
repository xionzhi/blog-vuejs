<template>
    <div><h1>{{ postData.title }}</h1></div>
    <div>
        <div><p>{{ this.postData.authorData.author_name }}</p></div>
        <div>{{ postData.ctime }}</div>
        <div class="post-markdown" v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
    import PostsApi from '@/api/posts'
    import { marked } from 'marked'
    export default {
        name: "Post",
        created: function () {
            this.GetPostDetail();
        },
        data() {
            return {
                params: {},
                postData: {
                    title: "",
                    slug: "",
                    markdown: "",
                    html: "",
                    image: "",
                    language: "",
                    meta_title: "",
                    meta_description: "",
                    authorData: {
                        author_name: ""
                    }
                },
            }
        },
        watch: {},
        computed: {
            compiledMarkdown() {
                return marked(this.postData.markdown);
            }
        },
        methods: {
            GetPostDetail: function () {
                this.params.slug = this.$route.params.slug;
                if (this.params) {
                    PostsApi.get(this.params).then((response) => {
                        if(response.data.code === 200) {
                            this.postData = response.data.data;
                        }
                        else {
                            console.info('http request 404');
                        }
                    })
                }
            }
        },
    }
</script>

<style scoped>
.post-markdown {
    margin-top: 10px;
}
</style>
