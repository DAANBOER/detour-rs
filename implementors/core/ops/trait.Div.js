(function() {var implementors = {};
implementors["detour"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl&lt;Ul, Ur&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;I&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Integer.html\" title=\"trait typenum::marker_traits::Integer\">Integer</a>,&nbsp;</span>","impl&lt;Ur, Br&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Br: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,&nbsp;</span>","impl&lt;Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","impl&lt;Ul, Ur&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;V, A, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt;,&nbsp;</span>","impl&lt;Ul, Ur&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;Ul, Bl, Ur, Br&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Bl: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Br: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: <a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Len</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; as <a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Len</a>&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Output</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html\" title=\"trait core::ops::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">()</a>: PrivateDiv&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;, <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, &lt;&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; as <a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Len</a>&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Output</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html\" title=\"trait core::ops::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt;::<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html\" title=\"trait core::ops::Sub\">Output</a>&gt;,&nbsp;</span>","impl&lt;Ul, Ur&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>",];
implementors["error_chain"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>",];
implementors["libc"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>",];
implementors["typenum"] = ["impl&lt;Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Br:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Bl:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Br:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: <a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Len</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Length.html\" title=\"type typenum::operator_aliases::Length\">Length</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html\" title=\"trait core::ops::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;(): PrivateDiv&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;, <a class=\"type\" href=\"typenum/consts/type.U0.html\" title=\"type typenum::consts::U0\">U0</a>, <a class=\"type\" href=\"typenum/consts/type.U0.html\" title=\"type typenum::consts::U0\">U0</a>, <a class=\"type\" href=\"typenum/operator_aliases/type.Sub1.html\" title=\"type typenum::operator_aliases::Sub1\">Sub1</a>&lt;<a class=\"type\" href=\"typenum/operator_aliases/type.Length.html\" title=\"type typenum::operator_aliases::Length\">Length</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;&gt;&gt;&gt;,&nbsp;</span>","impl&lt;I:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Integer.html\" title=\"trait typenum::marker_traits::Integer\">Integer</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;I&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateDivInt&lt;&lt;Ul as <a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Cmp</a>&lt;Ur&gt;&gt;::<a class=\"trait\" href=\"typenum/type_operators/trait.Cmp.html\" title=\"trait typenum::type_operators::Cmp\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","impl&lt;Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","impl&lt;V, A, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Div.html\" title=\"trait core::ops::Div\">Div</a>&lt;Rhs&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
