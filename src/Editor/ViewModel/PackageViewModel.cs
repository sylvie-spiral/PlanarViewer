using Reactive.Bindings;
using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Editor.ViewModel
{
    [Serializable]
    public class PackageViewModel
    {
        public PackageViewModel() : base()
        {

        }
        [MaxLength(240)]
        public ReactiveProperty<string> Title { get; } = new();

        [NotNull, Key]
        public ReactiveProperty<Guid> ID { get; } = new(Guid.NewGuid());

        [MaxLength(4096)]
        public ReactiveProperty<string> Description { get; } = new();

        public ReactiveProperty<string> Html { get; } = new();

        public ReactiveCollection<AuthorInfo> Authors { get; } = new();
    }

    [Serializable]
    public class AuthorInfo
    {
        public ReactiveProperty<string> Name { get; } = new();

        public ReactiveProperty<string> Address { get; } = new();

        public ReactiveProperty<string> Description { get; } = new();
    }
}
