using DynamicData;
using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Editor
{
    class BrowserList
    {
        public BrowserList()
        {
            Browsers.Add(new BrowserInfo { Name = "Edge" });
            Browsers.Add(new BrowserInfo { Name = "Chrome " });
            Browsers.Add(new BrowserInfo { Name = "Firefox" });
        }

        public SourceList<BrowserInfo> Browsers { get; set; } = new SourceList<BrowserInfo>();

    }

    [Serializable]
    public class BrowserInfo
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public string CommandLine { get; set; }
    }
}
