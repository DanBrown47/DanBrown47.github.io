

var textarea = $('.term');
var speed = 1000; //Writing speed in milliseconds
var text = ' npx danbrown47';
var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {$(".splash").fadeOut(1000);}, 500);
      }
    },time);
}

var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
"KERNEL supported cpus:",
"  Intel GenuineIntel",
"  AMD AuthenticAMD",
"  Centaur CentaurHauls",
"e820: BIOS-provided physical RAM map:",
"BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
"BIOS-e820: [mem 0x000000000009e000-0x000000000009ffff] reserved",
"BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
"BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",

"BIOS-e820: [mem 0x00000000ff000000-0x00000000ffffffff] reserved",
"BIOS-e820: [mem 0x0000000100000000-0x000000042f1fffff] usable",
"NX (Execute Disable) protection: active",
"efi: EFI v2.31 by American Megatrends",
"efi:  ACPI=0xca852000  ACPI 2.0=0xca852000  SMBIOS=0xca100398 ",
"efi: mem00: [Conventional Memory|   |  |  |  |   |WB|WT|WC|UC] range=[0x0000000000000000-0x000000000005f000) (0MB)",
"PM: Registered nosave memory: [mem 0xfed04000-0xfed1bfff]",
"PM: Registered nosave memory: [mem 0xfed1c000-0xfed1ffff]",
"PM: Registered nosave memory: [mem 0xfed20000-0xfedfffff]",
"PM: Registered nosave memory: [mem 0xfee00000-0xfee00fff]",
"PM: Registered nosave memory: [mem 0xfee01000-0xfeffffff]",
"PM: Registered nosave memory: [mem 0xff000000-0xffffffff]",
"e820: [mem 0xcfe00000-0xf7ffffff] available for PCI devices",
"Booting paravirtualized kernel on bare hardware",
"setup_percpu: NR_CPUS:256 nr_cpumask_bits:256 nr_cpu_ids:8 nr_node_ids:1",
"PERCPU: Embedded 31 pages/cpu @ffff88042ee00000 s87040 r8192 d31744 u262144",
"pcpu-alloc: s87040 r8192 d31744 u262144 alloc=1*2097152",
"pcpu-alloc: [0] 0 1 2 3 4 5 6 7 ",
"Built 1 zonelists in Node order, mobility grouping on.  Total pages: 4099911",
"Policy zone: Normal",
"Kernel command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
"PID hash table entries: 4096 (order: 3, 32768 bytes)",
"xsave: enabled xstate_bv 0x7, cntxt size 0x340 using standard form",
"AGP: Checking aperture...",
"AGP: No AGP bridge found",
"Calgary: detecting Calgary via BIOS EBDA area",
"Calgary: Unable to locate Rio Grande table in EBDA - bailing!",
"Memory: 16270208K/16660060K available (8000K kernel code, 1232K rwdata, 3752K rodata, 1408K init, 1300K bss, 389852K reserved, 0K cma-reserved)",
"SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1",
"Hierarchical RCU implementation.",
"	RCU dyntick-idle grace-period acceleration is enabled.",
"	RCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=8.",
"RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=8",
"NR_IRQS:16640 nr_irqs:488 16",
"	Offload RCU callbacks from all CPUs",
"	Offload RCU callbacks from CPUs: 0-7.",
"vt handoff: transparent VT on vt#7",
"Console: colour dummy device 80x25",
"console [tty0] enabled",
"hpet clockevent registered",
"tsc: Fast TSC calibration using PIT",
"tsc: Detected 2394.543 MHz processor",
"Calibrating delay loop (skipped), value calculated using timer frequency.. 4789.08 BogoMIPS (lpj=9578172)",
"pid_max: default: 32768 minimum: 301",
"ACPI: Core revision 20141107",
"ACPI: All ACPI Tables successfully acquired",
"Security Framework initialized",
"AppArmor: AppArmor initialized",
"Yama: becoming mindful.",
"Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes)",
"Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes)",
"Mount-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Mnf_conntrack version 0.5.0 (16384 buckets, 65536 max)",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered disabled state",
"Initialising...", ""];


var typed4 = new Typed('#typewritter-text', {
  strings: ['a Chess Player', 'an Actor','a DevSecOps Engineer', 'Danwnad N S', 
  'a Security Analyst', 'a Creative Developer', 'an Engineer', 
  'an Linux Evangelist'],
  typeSpeed: 10,
  backSpeed: 10,
  smartBackspace: true,
  fadeOut: true,
  
  loop: true,
});
  