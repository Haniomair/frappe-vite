import { frappeProxy } from './vite/frappeProxy.js'
import { frappeTypes } from './vite/frappeTypes.js'
import { jinjaBootData } from './vite/jinjaBootData.js'
import { buildConfig } from './vite/buildConfig.js'

function frappeVitePlugin(
  options = {
    frappeProxy: true,
    frappeTypes: true,
    jinjaBootData: true,
    buildConfig: true,
  },
) {
  let plugins = []
  if (options.frappeProxy) {
    plugins.push(frappeProxy(options.frappeProxy))
  }
  if (options.frappeTypes) {
    plugins.push(frappeTypes(options.frappeTypes))
  }
  if (options.jinjaBootData) {
    plugins.push(jinjaBootData(options.jinjaBootData))
  }
  if (options.buildConfig) {
    plugins.push(buildConfig(options.buildConfig))
  }
  return plugins
}

export default frappeVitePlugin
