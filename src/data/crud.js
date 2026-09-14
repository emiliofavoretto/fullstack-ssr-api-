import { KeyRound, Server, HardDrive } from "lucide-react";

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key exposta',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista series resnderizadas direto no SSR(servidor) com api-key exposta',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offiline',
        verb: 'Get',
        description: 'Lista series comnsumida no sessionStorage',
        color: 'purple',
        Icon: HardDrive,
    }
] 

export const crud = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key exposta',
        color: 'purple',
        Icon: KeyRound,
    }
]