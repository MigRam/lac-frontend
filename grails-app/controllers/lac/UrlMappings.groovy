package lac

class UrlMappings {

    static mappings = {
        /** LAC PORTAL */
        "/"(uri: "/lac/index.html")
        "/bundle/**"(uri: "/lac/index.html")
        "/collection/**"(uri: "/lac/index.html")
        "/resource/**"(uri: "/lac/index.html")
        "/docs"(uri: '/lac/index.html')
        "/docs/**"(uri: '/lac/index.html')
        "/services"(uri:'/lac/index.html')
        "/elan-player"(uri:'/lac/index.html')
        "/deposit"(uri:'/lac/index.html')
        "/admin"(uri:'/lac/index.html')
        "/account"(uri:'/lac/index.html')
        "/login"(uri:'/lac/index.html')
        "/logout"(uri:'/lac/index.html')
        "/impressum"(uri: '/lac/index.html')

        /** LAC DEMOS */
        "/demo/admin/"(uri: '/lac-admin/index.html')
        "/demo/deposit"(uri: "/lac-deposit/index.html")
        "/demo/services"(uri: "/lac-av-services/index.html")

        /** GSP VIEWS */
        "/sitemap.xml"(view: '/sitemap')
        "/robots.txt" (view: "/robots")
        "500"(view: '/error')
        "404"(view: '/notFound')
        "403"(view: "/errors/forbidden")

        /** CONTENT NEGOTIATION */
        "/$child/$prefix/$id"(controller: 'Application', action: 'resource')
    }
}