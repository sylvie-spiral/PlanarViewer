using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reactive;
using DynamicData;
using System.Windows.Forms;

namespace Editor
{
    public class ClipboardList
    {
        public ClipboardList()
        {
            IDataObject content = Clipboard.GetDataObject();
            string[] formats = content.GetFormats();
            Formats.AddRange(formats);
        }
        public SourceList<String> Formats { get; set; } = new SourceList<string>();
    }
}
