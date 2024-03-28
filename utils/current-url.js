export default function () {
    const config = useRuntimeConfig()
    return `${ config.public.baseUrl }${ useRoute().path }`;
  }