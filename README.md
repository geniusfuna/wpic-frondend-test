### Simplified Demonstration

This demo is a VUE 2 components project works with WPIC store tools to fullfill the need of batch importing offline sales orders on the Frendend part.

All remote data fetch callback is mocked to simulate remote api request, for remote api gatesways and server info, none of these is involved in this repo.

#### How to use codesandbox to preview this project

1. follow the link to open [the codesandbox page](https://codesandbox.io/p/github/swatchion/wpic-frondend-test/only-import?file=%2Fpackage.json%3A21%2C27&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clma1nx8u00qk3b6b53r9j6fc%2522%252C%2522sizes%2522%253A%255B34.85018726591761%252C65.14981273408239%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clma1nx8t00qf3b6b267ewj3x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clma1nx8u00qj3b6bdw4lkyml%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clma1nx8t00qh3b6bsidvt9de%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B10%252C90%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clma1nx8t00qf3b6b267ewj3x%2522%253A%257B%2522id%2522%253A%2522clma1nx8t00qf3b6b267ewj3x%2522%252C%2522activeTabId%2522%253A%2522clma6g8ev00xb3b6clkmo2fy4%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clma1nx8t00qe3b6b3zhd7x4j%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522view%2522%253A%2522code%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clma6g8ev00xb3b6clkmo2fy4%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clma1nx8t00qh3b6bsidvt9de%2522%253A%257B%2522id%2522%253A%2522clma1nx8t00qh3b6bsidvt9de%2522%252C%2522activeTabId%2522%253A%2522clma74b7r01p33b6beoajvq3t%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clma6heci024i3b6ck74p2hpw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%2522%257D%252C%257B%2522id%2522%253A%2522clma737rn019f3b6bt6eyt2dg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A8000%252C%2522id%2522%253A%2522clma74b7r01p33b6beoajvq3t%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clma1nx8u00qj3b6bdw4lkyml%2522%253A%257B%2522id%2522%253A%2522clma1nx8u00qj3b6bdw4lkyml%2522%252C%2522activeTabId%2522%253A%2522clma1nx8t00qi3b6bg1fcug67%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clma1nx8t00qi3b6bg1fcug67%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clma742lp002ae5ga3jag7v73%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clma21ihu00lm3b6bf6odpk7t%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

2.
