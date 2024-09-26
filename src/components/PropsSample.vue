<template>
    <h2>Hello {{ name }}</h2>
</template>

<script>
export default {
    name: 'PropsSample',
    props: ['fullname'],
    setup(props) {
        return {
            name: props.fullname
        };
    }
};
</script>
