package lac

import grails.core.GrailsApplication
import grails.plugins.GrailsPluginManager
import grails.plugins.PluginManagerAware

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        [grailsApplication: grailsApplication, pluginManager: pluginManager]
    }

    def reload() {
        // redirect(url: "${request.forwardURI}")
        // redirect(url: "${request.requestURL}")
        // redirect(uri: "/lac/index.html")
        // redirect(url: request.getRequestURL())
        // render request.getRequestURL()
        // redirect("/**"( uri: "/lac/index.html" ))
    }

    def resource() {
        def a5endpoint = "https://grails-prod.rrz.uni-koeln.de/ka3-a5-core/api/media/lac"
        def devEndpoint = "https://grails-dev.rrz.uni-koeln.de/ka3-api/media/lac2"
        def endpoint = "https://api.ka3.uni-koeln.de/media/lac"
        def id = "/hdl:$params.prefix/$params.id"
        def url = new URL(endpoint + id)

        if (request.getHeader("Accept").contains("application/x-cmdi+xml")) {
            render url.text, contentType: "application/x-cmdi+xml"
        }
    }
}
