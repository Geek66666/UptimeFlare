const pageConfig = {
  // Title for your status page
  title: "Cacode's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.cacode.us.kg/', label: 'Blog' },
    { link: 'https://bypass.cacode.us.kg/', label: 'Bing Bypass Server' },
    { link: 'https://todolist.cacode.us.kg/', label: 'Todo List', },
    { link: 'https://mindmap.cacode.us.kg/', label: 'Mindmap', },
    { link: 'https://it-tools.cacode.us.kg/', label: 'IT-tools', },
    { link: 'https://image.cacode.us.kg/', label: 'Telegraph Image', },
    { link: 'https://chat.cacode.us.kg/', label: 'NextChat', },
    { link: 'https://bingai.cacode.us.kg/', label: 'BingAI', },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    {
      id: 'blog_monitor',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.cacode.us.kg/'
    },
    {
      id: 'bypass_monitor',
      name: 'Bing Bypass Server',
      method: 'GET',
      target: 'https://bypass.cacode.us.kg/'
    },
    {
      id: 'todo_monitor',
      name: 'Todo List',
      method: 'GET',
      target: 'https://todolist.cacode.us.kg/'
    },
    {
      id: 'mindmap_monitor',
      name: 'Mindmap',
      method: 'GET',
      target: 'https://mindmap.cacode.us.kg/'
    },
    {
      id: 'tools_monitor',
      name: 'IT-tools',
      method: 'GET',
      target: 'https://it-tools.cacode.us.kg/'
    },
    {
      id: 'image_monitor',
      name: 'Telegraph Image',
      method: 'GET',
      target: 'https://image.cacode.us.kg/'
    },
    {
      id: 'chat_monitor',
      name: 'NextChat',
      method: 'GET',
      target: 'https://chat.cacode.us.kg/'
    },
    {
      id: 'bing_monitor',
      name: 'BingAI',
      method: 'GET',
      target: 'https://bingai.cacode.us.kg/'
    },
    
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
