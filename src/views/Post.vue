<template>
    <div><h1>{{ postData.title }}</h1></div>
    <div>
        <div>{{ postData.author }}</div>
        <div>{{ postData.create_time }}</div>
        <div class="post-markdown">{{ postData.post_markdown}}</div>
    </div>
</template>

<script>
    import PostsApi from '@/api/posts'
    export default {
        name: "Post",
        created: function () {
            this.GetPostDetail();
        },
        data() {
            return {
                params: {},
                postData: {
                    title: "title",
                    author: "author",
                    create_time: "create_time",
                    post_markdown: "post_markdown",
                },
            }
        },
        watch: {},
        methods: {
            GetPostDetail: function () {
                this.params.slug = this.$route.params.slug;
                let params = JSON.parse(JSON.stringify(this.params));
                if (params) {
                    PostsApi.get(params).then((response) => {
                        if(response.data.code === 200){
                            this.postData = response.data.data;
                        }
                        else{
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
