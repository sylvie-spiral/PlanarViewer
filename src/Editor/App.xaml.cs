using Editor.ViewModel;
using Reactive.Bindings;
using System.Windows;

namespace Editor
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public ReactiveProperty<PackageViewModel> Package { get; set; } = new(new PackageViewModel());
    }
}
