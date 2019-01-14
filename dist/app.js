webpackJsonp([0], [, function (t, e) {
  "use strict"; e.__esModule = !0; let n; !(function (t) {
    t.ELDRITCH = "eldritch", t.ILLUMINATI = "illuminati", t.JUDEOCHRISTIAN = "judeoChristian", t.SCIENTOLOGY = "scientology"
;
  })(n = e.Alignments || (e.Alignments = {})); let r; !(function (t) {
    t.INFLUENCE = "influence", t.MONEY = "money", t.POWER = "power";
  })(r = e.Resources || (e.Resources = {})); let o; !(function (t) {
    t.Business = "Business", t.Education = "Education", t.LawEnforcement = "Law Enforcement", t.MassMedia = "Mass Media", t.Neutral = "Neutral", t.Occult = "Occult", t.Politics = "Politics", t.Religion = "Religion"
;
  })(o = e.Categories || (e.Categories = {})); let i; !(function (t) {
    let e; !(function (t) {
      t.Chapel = "Chapel", t.OfficePark = "Office Park", t.School = "School", t.Skyscraper = "Skyscraper", t.Church = "Church"
;
    })(e = t.Locations || (t.Locations = {})); let n; !(function (t) {
      t.Screed = "Screed", t.Vlog = "Vlog", t.Sacrifice = "Sacrifice";
    })(n = t.Rituals || (t.Rituals = {})); let r; !(function (t) {
      t.Acolyte = "Acolyte", t.Bishop = "Bishop", t.Businessman = "Businessman", t.Cardinal = "Cardinal", t.CEO = "CEO", t.Congressman = "Congressman", t.Cultist = "Cultist", t.Governor = "Governor", t.Judge = "Judge", t.Mayor = "Mayor", t.MediaMogul = "Media Mogul", t.Member = "Member", t.NewsAnchor = "News Anchor", t.Pope = "Pope", t.Preacher = "Preacher", t.President = "President", t.Pundit = "Pundit", t.RadioHost = "Radio Host", t.Reporter = "Reporter", t.Schoolteacher = "Schoolteacher", t.Senator = "Senator", t.UpperManagement = "Upper Management";
    })(r = t.Units || (t.Units = {})); let o; !(function (t) {
      t.Basement = "Basement", t.StorageLocker = "Storage Locker"
;
    })(o = t.Upgrades || (t.Upgrades = {}))
;
  })(i = e.Items || (e.Items = {}))
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; const r = n(85); e.PlayerData = new r.PlayerData();
}, function (t, e, n) {
  "use strict"; const r = this && this.__extends || (function () {
    const t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (const n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n]);
      }
    }; return function (e, n) {
      function r() {
        this.constructor = e
;
      }t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r())
;
    }
;
  })(); e.__esModule = !0; let o = n(12),
    i = n(2),
    s = n(5),
    a = n(7),
    l = n(6),
    c = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this
;
      } return r(e, t), e.prototype.add = function () {
        i.PlayerData.resources[this.type] += this.amount;
      }, e.prototype.remove = function () {
        i.PlayerData.resources[this.type] -= this.amount, i.PlayerData.resources[this.type] < 0 && (i.PlayerData.resources[this.type] = 0);
      }, e;
    })(o.ResourceUsage); e.ResourceConstant = c; const u = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      } return r(e, t), e.prototype.add = function () {}, e.prototype.remove = function () {}, e.prototype.tick = function (t) {
        void 0 === t && (t = 1), i.PlayerData.multipliers.hasOwnProperty(this.type) && i.PlayerData.multipliers[this.type] > 1 && (t *= i.PlayerData.multipliers[this.type]); const e = this.amount * t * (l.GameSettings.tick / 1e3); i.PlayerData.resources[this.type] += a.Numbers.RoundToPrecision(e, 2)
;
      }, e
;
    })(o.ResourceUsage); e.Generator = u; const d = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this
;
      } return r(e, t), e.prototype.add = function () {
        const t = s.GetItemByName(this.type); t && (t.multiplier += this.amount);
      }, e.prototype.remove = function () {
        const t = s.GetItemByName(this.type); t && (t.multiplier -= this.amount);
      }, e
;
    })(o.ResourceUsage); e.Multiplier = d; const p = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      } return r(e, t), e.prototype.add = function () {
        i.PlayerData.multipliers.hasOwnProperty(this.type) ? i.PlayerData.multipliers[this.type] += this.amount : i.PlayerData.multipliers[this.type] = 1 + this.amount;
      }, e.prototype.remove = function () {
        i.PlayerData.multipliers[this.type] -= this.amount, i.PlayerData.multipliers[this.type] <= 1 && (i.PlayerData.multipliers = 1);
      }, e
;
    })(o.ResourceUsage); e.CategoryMultiplier = p; const m = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this;
      } return r(e, t), e.prototype.add = function () {}, e.prototype.remove = function () {}, e.prototype.tick = function (t) {
        void 0 === t && (t = 1); let e = a.RNG.Roll(100, 2),
          n = this.amount * t; if (n > e) {
            const r = s.GetItemByName(this.type); r.addToInventory(), r.cost.forEach(t => {
              return t.increaseByFactor();
            })
;
          }
      }, e
;
    })(o.ResourceUsage); e.Recruiter = m
;
}, function (t, e, n) {
  "use strict"; const r = this && this.__extends || (function () {
    const t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (const n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n]);
      }
    }; return function (e, n) {
      function r() {
        this.constructor = e
;
      }t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    }
;
  })(); e.__esModule = !0; let o = n(2),
    i = n(13),
    s = n(5),
    a = n(7),
    l = n(3),
    c = (function () {
      function t(t, e, n, r, o, s, l) {
        void 0 === s && (s = new i.UnlockInfo([], [])), void 0 === l && (l = null); const c = this; this.amountOwned = 0, this.benefits = [], this.tickables = [], this.staticBenefits = [], this.value = 0, this.isUnlocked = !1, this.multiplier = 1, this.name = t, this.description = e, this.category = n, this.cost = r, this.benefits = o, this.alignment = l, this.unlockInfo = s, this.value = this.calculateValue(), o.forEach(t => {
          a.Objects.TypeGuard(t, "tick") ? c.tickables.push(t) : c.staticBenefits.push(t)
;
        });
      } return t.prototype.calculateValue = function () {
        let t = this.cost.reduce((t, e) => {
            return t + e.amount
;
          }, 0),
          e = this.benefits.filter(t => {
            return t instanceof l.ResourceConstant || t instanceof l.Generator;
          }).reduce((t, e) => {
            return t + e.amount;
          }, 0),
          n = this.benefits.filter(t => {
            return t instanceof l.Multiplier;
          }).reduce((t, e) => {
            return e instanceof l.Multiplier ? t + e.amount : t;
          }, 0); return (t + e) * n;
      }, t.prototype.buy = function () {
        this.isAffordable = this.cost.reduce((t, e) => {
          return t && e.isAffordable()
;
        }, !0), this.isAffordable && (this.cost.forEach(t => {
          return t.spend()
;
        }), this.benefits.forEach(t => {
          return t.add();
        }), this.alignment && this.alignment.add(), this.addToInventory());
      }, t.prototype.addToInventory = function () {
        this.amountOwned++, this.checkUnlockInfo();
      }, t.prototype.removeFromInventory = function () {
        this.amountOwned--, this.benefits.forEach(t => {
          return t.remove();
        }), this.checkUnlockInfo()
;
      }, t.prototype.checkUnlockInfo = function () {
        this.unlockInfo.requiredToUnlock.forEach(t => {
          const e = s.GetItemByName(t); e.isUnlocked || (e.isUnlocked = !e.unlockInfo || e.unlockInfo.checkAllRequirements())
;
        })
;
      }, t.prototype.tick = function () {
        let t = this.amountOwned * this.multiplier; o.PlayerData.multipliers.hasOwnProperty(this.category) && o.PlayerData.multipliers[this.category] >= 1 && (t *= o.PlayerData.multipliers[this.category]), this.tickables.forEach(e => {
          e instanceof l.Recruiter || e.tick(t);
        });
      }, t
;
    })(); e.GameItem = c; const u = (function (t) {
      function e(e, n, r, o, i, s, a, l) {
        const c = t.call(this, e, n, r, o, i, l, a) || this; return c.canPurchase = !0, c.duration = 1e3 * s, c;
      } return r(e, t), e.prototype.buy = function () {
        const e = this; t.prototype.buy.call(this), this.isAffordable && a.SetIntervalForDuration(this.duration, this.tick, () => {
          return e.canPurchase = !1;
        }, () => {
          return e.canPurchase = !0;
        });
      }, e;
    })(c); e.Ritual = u; const d = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this
;
      } return r(e, t), e.prototype.buy = function () {
        const e = this; t.prototype.buy.call(this), this.isAffordable && (o.PlayerData.inventory.find(t => {
          return t.name === e.name;
        }) || o.PlayerData.inventory.push(this), this.cost.forEach(t => {
          return t.increaseByFactor()
;
        }))
;
      }, e;
    })(c); e.Unit = d; const p = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      } return r(e, t), e.prototype.buy = function () {
        const e = this; t.prototype.buy.call(this), this.isAffordable && (o.PlayerData.inventory.find(t => {
          return t.name === e.name
;
        }) || o.PlayerData.inventory.push(this), this.cost.forEach(t => {
          return t.increaseByFactor()
;
        }))
;
      }, e;
    })(c); e.Location = p; const m = (function (t) {
      function e() {
        const e = t !== null && t.apply(this, arguments) || this; return e.isOwned = !1, e
;
      } return r(e, t), e.prototype.buy = function () {
        t.prototype.buy.call(this), this.isAffordable && (this.isOwned = !0, this.addToInventory());
      }, e;
    })(c); e.Upgrade = m
;
}, function (t, e, n) {
  "use strict"; function r(t) {
    return c.Database.find(e => {
      return e.name === t
;
    })
;
  } function o(t) {
    return c.Database.filter(e => {
      return e.category === t
;
    });
  } function i(t, e) {
    if (u.GameItem.prototype.hasOwnProperty(t)) {
      return c.Database.filter(n => {
        return n[t] === e;
      });
    } throw new Error("Error finding GameItems: invalid property name");
  } function s(t) {
    return c.Database.filter(e => {
      return t(e);
    })
;
  } function a() {
    c.Database.forEach(t => {
      t.isAffordable = t.cost.reduce((t, e) => {
        return t && e.isAffordable()
;
      }, !0)
;
    });
  } function l() {
    c.Database.forEach(t => {
      t.isUnlocked || (t.isUnlocked = t.unlockInfo.checkAllRequirements())
;
    });
  }e.__esModule = !0; var c = n(16),
    u = n(4); e.GetItemByName = r, e.GetItemsByCategory = o, e.GetItemsByProperty = i, e.GetItemsbyExpression = s, e.CheckAllItemsAffordability = a, e.CheckAllItemsUnlocked = l;
}, function (t, e) {
  "use strict"; e.__esModule = !0, e.GameSettings = {costIncreaseFactor: 1.2, tick: 82, clickAmount: 1, influenceFactor: 1.0001, alignmentDecreaseFactor: 0.2};
}, function (t, e) {
  "use strict"; function n(t, e, n, r, o) {
    void 0 === o && (o = 1), n && n(); const i = setInterval(() => {
      e();
    }, o); setTimeout(() => {
      clearInterval(i), r && r()
;
    }, this.duration);
  } function r(t, e) {
    for (let n = 0; n < e; n++) {
      t();
    }
  }e.__esModule = !0; let o; !(function (t) {
    function e(t, e) {
      const n = Math.pow(10, e); return Math.round(t * n) / n;
    } function n(t) {
      return t / 100
;
    } function r(t) {
      return t / 1e3;
    } function o(t) {
      return 1e3 * t;
    }t.RoundToPrecision = e, t.AsPercentage = n, t.MillisecondToSecond = r, t.SecondToMilliseconds = o
;
  })(o = e.Numbers || (e.Numbers = {})); let i; !(function (t) {
    function e(t) {
      const e = new Object(); for (const n in t) {
        t.hasOwnProperty(n) && !n.startsWith("_") && (e[n] = t[n]);
      } return e
;
    } function n(t) {
      const e = new Object(); for (const n in t) {
        if (t.hasOwnProperty(n)) {
          const r = n.charAt(0).toUpperCase() + n.slice(1); e[r] = t[n]
;
        }
      } return e;
    } function r(t, e) {
      const n = t; for (const r in e) {
        e.hasOwnProperty(r) && (t[r] = e[r]);
      } return n;
    } function o(t, e) {
      return void 0 !== t[e];
    }t.ParseOutAutoAttributes = e, t.CapitalizePropertyNames = n, t.Combine = r, t.TypeGuard = o
;
  })(i = e.Objects || (e.Objects = {})); let s; !(function (t) {
    function e(t, e) {
      return void 0 === e && (e = 1), o.RoundToPrecision(Math.random() * t, e)
;
    }t.Roll = e;
  })(s = e.RNG || (e.RNG = {})); let a; !(function (t) {
    function e(t) {
      switch (t[t.length - 1]) {
        default:return t += "s";
      }
    }t.Pluralize = e;
  })(a = e.Strings || (e.Strings = {})), e.SetIntervalForDuration = n, e.DoFunctionNTimes = r
;
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t) {
      this.db = t
;
    } return t.prototype.getAll = function () {
      return this.db;
    }, t.prototype.getByExpression = function (t) {
      return this.db.filter(t)
;
    }, t.prototype.getByProp = function (t, e) {
      return this.db.find(n => {
        return n[t] === e
;
      });
    }, t
;
  })(); e.default = n
;
}, function (t, e, n) {
  "use strict"; const r = this && this.__extends || (function () {
    const t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (const n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n])
;
      }
    }; return function (e, n) {
      function r() {
        this.constructor = e
;
      }t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    }
;
  })(); e.__esModule = !0; let o = n(5),
    i = n(12),
    s = n(2),
    a = n(6),
    l = n(7),
    c = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      } return r(e, t), e.prototype.spend = function () {
        s.PlayerData.resources[this.type] -= this.amount, s.PlayerData.resources[this.type] = l.Numbers.RoundToPrecision(s.PlayerData.resources[this.type], 2)
;
      }, e.prototype.isAffordable = function () {
        return s.PlayerData.resources[this.type] >= this.amount
;
      }, e.prototype.increaseByFactor = function () {
        this.amount *= a.GameSettings.costIncreaseFactor, this.amount = Math.round(100 * this.amount) / 100;
      }, e.prototype.decreaseByFactor = function () {
        this.amount /= a.GameSettings.costIncreaseFactor, this.amount = Math.round(100 * this.amount) / 100
;
      }, e
;
    })(i.ResourceUsage); e.Cost = c; const u = (function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      } return r(e, t), e.prototype.spend = function () {
        s.PlayerData.inventory[this.type] -= this.amount; const t = o.GetItemByName(this.type); t.amountOwned -= this.amount - 1, t.removeFromInventory(), t.cost.forEach(t => {
          return t.decreaseByFactor()
;
        })
;
      }, e.prototype.isAffordable = function () {
        return o.GetItemByName(this.type).amountOwned >= this.amount;
      }, e.prototype.increaseByFactor = function () {}, e.prototype.decreaseByFactor = function () {}, e
;
    })(i.ResourceUsage); e.UnitCost = u
;
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t) {
      this.db = t
;
    } return t.prototype.getById = function (t) {
      return this.db.find(e => {
        return e.id === t;
      });
    }, t.prototype.getAll = function () {
      return this.db;
    }, t.prototype.getByExpression = function (t) {
      return this.db.filter(t);
    }, t.prototype.getByProp = function (t, e) {
      return this.db.find(n => {
        return n[t] === e
;
      })
;
    }, t
;
  })(); e.default = n
;
},, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t, e) {
      this.type = t, this.amount = e
;
    } return t;
  })(); e.ResourceUsage = n
;
}, function (t, e, n) {
  "use strict"; const r = this && this.__extends || (function () {
    const t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
      t.__proto__ = e
;
    } || function (t, e) {
      for (const n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n])
;
      }
    }; return function (e, n) {
      function r() {
        this.constructor = e;
      }t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    }
;
  })(); e.__esModule = !0; let o = n(12),
    i = n(2),
    s = n(5),
    a = n(1),
    l = n(3),
    c = (function () {
      function t(t, e) {
        this.unlockRequirements = t, this.requiredToUnlock = e
;
      } return t.prototype.checkAllRequirements = function () {
        return this.unlockRequirements.reduce((t, e) => {
          return e.isRequirementMet() && t;
        }, !0)
;
      }, t;
    })(); e.UnlockInfo = c; const u = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this
;
      } return r(e, t), e.prototype.isRequirementMet = function () {
        return s.GetItemByName(this.type).amountOwned >= this.amount
;
      }, e;
    })(o.ResourceUsage); e.UnitRequirement = u; const d = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this
;
      } return r(e, t), e.prototype.isRequirementMet = function () {
        return i.PlayerData.resources.hasOwnProperty(this.type) && i.PlayerData.resources[this.type] >= this.amount
;
      }, e;
    })(o.ResourceUsage); e.ResourceRequirement = d; const p = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this;
      } return r(e, t), e.prototype.isRequirementMet = function () {
        return i.PlayerData.alignment.hasOwnProperty(this.type) && i.PlayerData.alignment[this.type] >= this.amount;
      }, e;
    })(o.ResourceUsage); e.AlignmentRequirement = p; const m = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this
;
      } return r(e, t), e.prototype.isRequirementMet = function () {
        const t = this; return i.PlayerData.inventory.filter(e => {
          return e.category === t.type
;
        }).reduce((t, e) => {
          return t + e.amountOwned;
        }, 0) >= this.amount;
      }, e;
    })(o.ResourceUsage); e.CategoryInventoryRequirement = m; const f = (function (t) {
      function e(e, n) {
        return t.call(this, e, n) || this
;
      } return r(e, t), e.prototype.isRequirementMet = function () {
        const t = this; if (i.PlayerData.resources.hasOwnProperty("influence")) {
          return i.PlayerData.inventory.filter(e => {
            return e.category === t.type
;
          }).reduce((t, e) => {
            const n = e.benefits.find(t => {
              return t.type === a.Resources.INFLUENCE && t instanceof l.ResourceConstant
;
            }); return n ? t + n.amount : t
;
          }, 0) >= this.amount
;
        }
      }, e;
    })(o.ResourceUsage); e.CategoryInfluenceRequirement = f;
}, function (t, e, n) {
  "use strict"; const r = this && this.__extends || (function () {
    const t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (const n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n]);
      }
    }; return function (e, n) {
      function r() {
        this.constructor = e
;
      }t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    }
;
  })(); e.__esModule = !0; let o = n(90),
    i = n(89),
    s = n(10),
    a = n(18),
    l = [new o.BlogPost('CultSim, Part 3: "Cost Benefit" Analysis', new Date(2017, 3, 17, 16, 0), "static/blogPosts/4-17-17_3.html", [i.Tags.CultSimulator, i.Tags.TypeScript, i.Tags.GameDev, i.Tags.Projects]), new o.BlogPost("CultSim, Part 2: Initial Game Logic", new Date(2017, 3, 17, 14, 30), "static/blogPosts/4-17-17_2.html", [i.Tags.CultSimulator, i.Tags.TypeScript, i.Tags.GameDev, i.Tags.Projects]), new o.BlogPost("CultSim, Part 1: First Steps", new Date(2017, 3, 17, 12, 0), "static/blogPosts/4-17-17.html", [i.Tags.CultSimulator, i.Tags.TypeScript, i.Tags.GameDev, i.Tags.Projects]), new o.BlogPost('Introduction to "Cult Simulator"', new Date(2017, 3, 10, 13, 0), "static/blogPosts/4-10-17.html", [i.Tags.CultSimulator, i.Tags.TypeScript, i.Tags.GameDev, i.Tags.Angular, i.Tags.Projects]), new o.BlogPost("Building the Blog, Part 3: Changing Data Access", new Date(2017, 3, 4, 15, 0), "static/blogPosts/4-4-17.html", [i.Tags.WebDev, i.Tags.Angular, i.Tags.TypeScript, i.Tags.Projects, i.Tags.PersonalWebsite]), new o.BlogPost("Building the Blog, Part 2: Dynamically Embedding Images", new Date(2017, 2, 24, 12, 0), "static/blogPosts/3-24-17_2.html", [i.Tags.WebDev, i.Tags.Angular, i.Tags.TypeScript, i.Tags.Projects, i.Tags.PersonalWebsite]), new o.BlogPost("Building The Blog, Part 1: Rendering the Body Content", new Date(2017, 2, 24, 10, 0), "static/blogPosts/3-24-17_1.html", [i.Tags.WebDev, i.Tags.Angular, i.Tags.TypeScript, i.Tags.Projects, i.Tags.PersonalWebsite])]; l.forEach((t, e) => {
      return t.id = l.length - e;
    }); let c = (function (t) {
        function e() {
          return t !== null && t.apply(this, arguments) || this;
        } return r(e, t), e.prototype.getRecentPosts = function (t) {
          return l.sort(a.SortByProp("date")).slice(0, t)
;
        }, e.prototype.getTagData = function () {
          const t = l.reduce((t, e) => {
            const n = t; return e.tags.forEach(t => {
              return n.hasOwnProperty(t) ? n[t]++ : n[t] = 1;
            }), n;
          }, {}); return a.SortObjectPropertiesByValue(t);
        }, e;
      })(s.default),
      u = new c(l); e.default = u
;
}, function (t, e) {
  "use strict"; function n(t, e, n) {
    n.html5Mode(!0).hashPrefix("!"), e.otherwise("/"), t.state(r.Resume.toLowerCase(), {url: "/", component: "resume"}).state(r.Blog.toLowerCase(), {url: "/blog", component: "blog"}).state("filterBlogByTag", {url: "/blog/:tag", component: "blog"}).state(r.BlogPost.toLowerCase(), {url: "/blogPost/:id", component: "blogPost"}).state(r.Projects.toLowerCase(), {url: "/projects", component: "projects"}).state(r.Skills.toLowerCase(), {url: "/skills", component: "skills"}).state("cultSim", {url: "/cultSim", component: "cultSim"});
  }n.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"], e.__esModule = !0, e.default = n; let r; !(function (t) {
    t.Resume = "Resume", t.Blog = "Blog", t.BlogPost = "BlogPost", t.Projects = "Projects", t.Skills = "Skills"
;
  })(r = e.Routes || (e.Routes = {}));
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(81),
    o = n(82),
    i = n(83),
    s = n(84); e.Database = [r.Locations, o.Rituals, i.Units, s.Upgrades].reduce((t, e) => {
      for (const n in e) {
        e.hasOwnProperty(n) && t.push(e[n]);
      } return t;
    }, [])
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(2),
    o = n(6),
    i = (function () {
      function t(t, e) {
        void 0 === t && (t = "none"), void 0 === e && (e = 0), this.type = t, this.amount = e;
      } return t.prototype.add = function () {
        r.PlayerData.alignment.hasOwnProperty(this.type) || (r.PlayerData.alignment[this.type] = 0), r.PlayerData.alignment[this.type] += this.amount; for (const t in r.PlayerData.alignment) {
          r.PlayerData.alignment.hasOwnProperty(t) && t !== this.type && (r.PlayerData.alignment[t] -= this.amount * o.GameSettings.alignmentDecreaseFactor);
        }
      }, t
;
    })(); e.Alignment = i;
}, function (t, e) {
  "use strict"; function n(t, e) {
    return function (n, r) {
      return n[t] > r[t] ? e ? 1 : -1 : n[t] < r[t] ? e ? -1 : 1 : 0
;
    };
  } function r(t) {
    const e = []; for (const n in t) {
      t.hasOwnProperty(n) && e.push({key: n, value: t[n]});
    } return e;
  }e.__esModule = !0, e.SortByProp = n, e.SortObjectPropertiesByValue = r
;
}, function (t, e) {}, function (t, e, n) {
  "use strict"; e.__esModule = !0, e.AppComponent = {template: n(35)}
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(57),
    i = n(58),
    s = n(56),
    a = n(59),
    l = n(60); e.Common = "common", r.module(e.Common, []).component("header", o.HeaderComponent).component("nav", i.NavComponent).component("footer", s.FooterComponent).component("recentBlogs", a.RecentBlogs).component("sidebar", l.Sidebar);
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(64),
    i = n(65),
    s = n(67),
    a = n(70); e.Components = "components", r.module(e.Components, [o.Blog, i.Projects, s.Resume, a.Skills])
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(74),
    i = n(75),
    s = n(76),
    a = n(77),
    l = n(78),
    c = n(79); e.CultSim = "cultSim", r.module(e.CultSim, []).component("cultSim", o.App).component("buyPanel", s.BuyPanel).component("buyTable", a.BuyTable).component("buyItem", i.BuyItem).component("resources", c.ResourcesComponent).component("inventory", l.InventoryComponent);
},, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {
  t.exports = '<div class="container">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-4 col-xs-12 sidebar">\r\n\t\t\t\t<sidebar></sidebar>\r\n\t\t</div>\r\n\t\t<div class="col-sm-8 col-xs-12">\r\n\t\t\t<header></header>\r\n\t\t\t<nav></nav>\r\n\t\t\t<div class="spacer-30"></div>\r\n\t\t\t<div class="ui-view">\r\n\t\t\t\t<ui-view></ui-view>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<footer></footer>\r\n</div>';
}, function (t, e) {
  t.exports = '<hr />\r\n<p class="footer-text">&copy;{{$ctrl.year}} &mdash; John Kachurek</p>\r\n';
}, function (t, e) {
  t.exports = '<div class="row" id="top">\r\n\t<!--<div class="col-sm-4 col-xs-12">\r\n\t\t<img ng-src="static/images/meCrop2.jpg" class="img-circle img-responsive content-center profile-img" width="268" height="268"/>\r\n\t\t<div class="spacer-10"></div>\r\n\t</div>-->\r\n\t<div class="col-xs-12">\r\n\t\t<div class="well well-lg header-well">\r\n\t\t\t<span class="header-display">\r\n\t\t\t\t<h1 class="large-txt hidden-xs">John Kachurek</h1>\r\n\t\t\t\t<h2 class="small-txt visible-xs-block">John Kachurek</h2>\r\n\t\t\t</span>\r\n\t\t\t<h3 class="subheader" id="subtitle">Full Stack Developer</h3>I am a Cleveland-based software developer specializing in JavaScript, React, and C# / .NET. My passion lies in creative problem solving, whether through code or otherwise, and I thrive on overcoming unique challenges. I am constantly seeking new projects and languages to explore, and am a quick learner with new technologies.  I\'m currently reworking my website in React, so pardon the mess and the lack of blog posts.</div>\r\n\t</div>\r\n</div>'
;
}, function (t, e) {
  t.exports = '<div class="row">\r\n\t<div class="col-xs-12" align="center">\r\n\t\t<div class="btn-group">\r\n\t\t\t<a ng-repeat="link in $ctrl.navLinks" class="btn btn-default" ui-sref-active="active-color"\r\n\t\t\t\t ui-sref="{{link.toLowerCase()}}" ui-sref-opts="{reload: true}" ng-bind="link"></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<h2 class="text-center">Recent Posts</h2>\r\n<ul class="list-group">\r\n\t<li class="list-group-item recent-post"\r\n\t\t\tng-repeat="post in $ctrl.posts">\r\n\t\t<a ui-sref="blogpost({id: post.id})" ng-bind="post.title">\r\n\t\t</a>\r\n\t\t<br/>\r\n\t\t<span class="date" ng-bind="post.date.toLocaleDateString()"></span>\r\n\t</li>\r\n\t<li class="list-group-item text-center">\r\n\t\t<a ui-sref="blog"><em>See All</em></a>\r\n\t</li>\r\n</ul>';
}, function (t, e) {
  t.exports = '<div class="row">\r\n\t<img ng-src="static/images/meCrop2.jpg" class="img-circle img-responsive content-center profile-img" width="268" height="268"/>\r\n</div>\r\n<div class="spacer-10"></div>\r\n<div class="row" id="navIcons" align="center">\r\n\t<div class="col-xs-3 bottom-spacing" ng-repeat="icon in $ctrl.icons">\r\n\t\t<a ng-href="{{icon.link}}" target="_blank"><img ng-src="{{icon.img}}" class="nav-icon"></a>\r\n\t</div>\r\n</div>\r\n<div class="hidden-xs">\r\n\t<recent-blogs></recent-blogs>\r\n</div>';
}, function (t, e) {
  t.exports = '<div class="panel panel-default blog-post">\r\n\t<div class="panel-heading">\r\n\t\t<a ui-sref="blogpost({id: $ctrl.post.id})">\r\n\t\t\t<h2 class="font-montserrat-bold header preview-header" ng-bind="$ctrl.post.title"></h2>\r\n\t\t</a>\r\n\t\t<h3 class="panel-title blog-date"\r\n\t\t\t\tng-bind="$ctrl.post.getDisplayDateTime()"></h3>\r\n\t</div>\r\n\t<div class="panel-body">\r\n\t\t<div class="well well-sm">\r\n\t\t\t\tTags:&nbsp;\r\n\t\t\t\t<span ng-repeat="tag in $ctrl.post.tags">\r\n\t\t\t\t\t<a class="tag" ui-sref="filterBlogByTag({tag: tag})" ng-bind="tag"></a>\r\n\t\t\t\t\t<span ng-if="!$last">,&nbsp;</span>\r\n\t\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>';
}, function (t, e) {
  t.exports = '<div class="panel panel-default blog-post">\r\n\t<div class="panel-heading">\r\n\t\t<h2 class="font-montserrat-bold header" ng-bind="$ctrl.post.title" ui-sref="blogpost({id: $ctrl.post.id})"></h2>\r\n\t\t<h3 class="panel-title blog-date" ng-bind="$ctrl.post.getDisplayDateTime()"></h3>\t\t\r\n\t</div>\r\n\t<div class="panel-body" ng-include="$ctrl.post.bodyTemplate"></div>\r\n\t<div class="panel-footer">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-xs-10">\r\n\t\t\t\t<div style="display: inline" ng-repeat="tag in $ctrl.post.tags">\r\n\t\t\t\t\t<a class="tag" ui-sref="filterBlogByTag({tag: tag})" ng-bind="tag"></a>\r\n\t\t\t\t\t<span ng-if="!$last">,&nbsp;</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-xs-2" style="text-align: right;">\r\n\t\t\t\t<a style="cursor: pointer" ng-click="$ctrl.scrollToTop()">Top</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'
;
}, function (t, e) {
  t.exports = '<div class="row">\r\n\t<div class="col-sm-offset-1 col-sm-10 col-xs-12">\r\n\t\t<div class="well well-sm">\r\n\t\t\tTags:\r\n\t\t\t<span ng-repeat="tag in $ctrl.tags">\r\n\t\t\t\t<a ui-sref="filterBlogByTag({tag: tag.key})" ng-bind="tag.key"></a>\r\n\t\t\t\t<span ng-if="!$last">,&nbsp;</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class="row text-center" ng-if="$ctrl.currentTag">\r\n\t<h4>All blog posts tagged with <em ng-bind="$ctrl.currentTag"></em></h4>\r\n</div>\r\n<blog-post-preview ng-repeat="post in $ctrl.currentPage" post="post"></blog-post-preview>\r\n<div class="row" align="center" ng-show="$ctrl.pages.length > 1">\r\n\t<ul class="pagination">\r\n\t\t<li ng-click="$ctrl.goToPage($ctrl.currentPageNumber - 1)"\r\n\t\t\t\tng-class="{\'disabled\': $ctrl.currentPageNumber === 0}">\r\n\t\t\t<a aria-label="Previous">&laquo;</a>\t\t\t\r\n\t\t</li>\r\n\t\t<li ng-repeat="page in $ctrl.pages"\r\n\t\t\t\tng-class="{\'active\': $index === $ctrl.currentPageNumber}"\r\n\t\t\t\tng-click="$ctrl.goToPage($index)">\r\n\t\t\t<a \r\n\t\t\t\t ng-bind="$index + 1"></a>\r\n\t\t</li>\r\n\t\t<li ng-click="$ctrl.goToPage($ctrl.currentPageNumber + 1)"\r\n\t\t\t\tng-class="{\'disabled\': $ctrl.currentPageNumber === $ctrl.pages.length - 1}">\r\n\t\t\t<a aria-label="Next">&raquo;</a>\t\t\t\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n';
}, function (t, e) {
  t.exports = '<div class="row" ng-repeat="proj in $ctrl.projects">\r\n\t<div class="panel panel-default">\r\n\t\t<div class="panel-heading">\r\n\t\t\t<strong class="panel-title" ng-bind="proj.title"></strong>\r\n\t\t\t&nbsp;&nbsp;//&nbsp;&nbsp;\r\n\t\t\t<em ng-bind="proj.date"></em>\r\n\t\t</div>\r\n\t\t<div class="panel-body">\r\n\t\t\t<div class="{\'row\': proj.images.length}">\r\n\t\t\t\t<div ng-if="proj.images.length" class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t<a ng-href="{{proj.images[0]}}" target="_blank">\r\n\t\t\t\t\t\t<img class="img-responsive img-rounded black-border" ng-src="{{proj.images[0]}}" alt="Click to view image in a new tab">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div ng-class="{\'col-sm-8 col-xs-12\': proj.images.length }">\r\n\t\t\t\t\t<p><em ng-bind="proj.tools"></em></p>\r\n\t\t\t\t\t<p ng-bind="proj.description"></p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div ng-show="proj.link" class="col-xs-6 col-sm-4 col-md-3">\r\n\t\t\t\t\t<a ng-href="{{proj.link}}" target="_blank" class="btn btn-primary">View Project</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--<div ng-show="proj.images.length" class="col-xs-6 col-sm-4 col-md-3">\r\n\t\t\t\t\t<a class="btn btn-primary">View Screenshots</a>\r\n\t\t\t\t</div>-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<div class="panel panel-default">\r\n\t<div class="panel-heading">\r\n\t\t<strong ng-bind="$ctrl.item.location"></strong>\r\n\t\t<span ng-if="$ctrl.item.position">&nbsp;&nbsp;//&nbsp;&nbsp;</span>\r\n\t\t{{$ctrl.item.position}}\r\n\t\t<span ng-if="$ctrl.item.dates">&nbsp;&nbsp;//&nbsp;&nbsp;</span>\r\n\t\t<em ng-bind="$ctrl.item.dates"></em>\r\n\t</div>\r\n\t<div class="panel-body">\r\n\t\t<ul>\r\n\t\t\t<li ng-repeat="bullet in $ctrl.item.bullets" ng-bind="bullet"></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<div class="row experience-section-header">\r\n\t<div class="col-xs-4 " ng-repeat="section in $ctrl.sections"\r\n\t\t\t ng-class="{\'active-section\': $ctrl.activeSection == section}">\r\n\t\t<img ng-src="{{section.img}}" class="img-responsive content-center pointer"\r\n\t\t\t\tng-class="{\'active-section\': $ctrl.activeSection == section}"\r\n\t\t\t\tng-click="$ctrl.activeSection = section" height="75" width="75">\r\n\t\t<div class="pointer" ng-click="$ctrl.activeSection = section">\r\n\t\t\t<div class="pointer large hidden-sm hidden-xs" ng-bind="section.name"></div>\r\n\t\t\t<div class="pointer small visible-sm-block visible-xs-block" ng-bind="section.name"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class="row">\r\n\t<resume-item ng-repeat="item in $ctrl.activeSection.contents" item="item"></resume-item>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<div class="panel panel-default">\r\n\t<div class="panel-heading category-header" ng-click="$ctrl.show = !$ctrl.show">\r\n\t\t<h2 class="font-montserrat-bold panel-title" ng-bind="$ctrl.category"></h2>\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.show">\r\n\t\t<div class="panel-group">\r\n\t\t\t<skill-panel ng-repeat="skill in $ctrl.skills" skill="skill"></skill-panel>\r\n\t\t</div>\r\n\t</div>\r\n</div>'
;
}, function (t, e) {
  t.exports = '<div class="panel panel-info">\r\n\t<div class="panel-heading skill-header" ng-click="$ctrl.show = !$ctrl.show">\r\n\t\t<span class="panel-title font-montserrat-bold" ng-bind="$ctrl.skill.name"></span>\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.show" ng-bind="$ctrl.skill.details"></div>\r\n</div>';
}, function (t, e) {
  t.exports = '<div class="row">\r\n\t<div class="col-sm-10 col-sm-offset-1 col-xs-12">\r\n\t\t<div class="text-center text-info">\r\n\t\t\t<p><i>Click the headers to view details</i></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-xs-12">\r\n\t\t<div class="panel-group">\r\n\t\t\t<skill-category-panel ng-repeat="(categoryName, skillsArray) in $ctrl.skills"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcategory="categoryName" skills="skillsArray"></skill-category-panel>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-10 col-sm-offset-1 col-xs-12">\r\n\t\t<div class="well">\r\n\t\t\t<p class="text-justify" ng-bind="$ctrl.otherSkills"></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<div class="cult-sim">\r\n<div style="margin-bottom: 15px;">\r\n\t<button class="btn btn-primary" ng-click="$ctrl.resourceButton(\'money\')">Work</button>\r\n\t<button class="btn btn-primary" ng-click="$ctrl.resourceButton(\'power\')">Pray</button>\r\n</div>\r\n<resources></resources>\r\n<!--<inventory></inventory>-->\r\n<buy-panel></buy-panel>\r\n</div>\r\n';
}, function (t, e) {
  t.exports = '<div class="buy-item-header"\r\n\t\t ng-click="$ctrl.item.showDetails = !$ctrl.item.showDetails"\r\n\t\t ng-style="$ctrl.item.showDetails && {\'border-bottom\': \'1px solid #666\'}">\r\n\t<h4 ng-class="{\'text-muted\': !$ctrl.item.isAffordable || $ctrl.item.isOwned}">\r\n\t\t<strong>{{$ctrl.vm.name}}</strong>\r\n\t\t<span style="font-size: 0.75em;" class="text-muted" ng-hide="$ctrl.item.isOwned">\r\n\t\t\t{{$ctrl.vm.header}}\r\n\t\t</span>\r\n\t</h4>\r\n</div>\r\n<div class="row" ng-show="$ctrl.item.showDetails" style="padding: 5px">\r\n\t<div class="col-md-2 col-sm-2 col-xs-2">\r\n\t\t<button class="btn btn-default" ng-click="$ctrl.buy()"\r\n\t\t\t\tng-class="{\'btn-success\': $ctrl.item.isAffordable}"\r\n\t\t\t\tng-hide="$ctrl.item.isOwned"\r\n\t\t\t\tng-disabled="!$ctrl.item.isAffordable || ($ctrl.item.duration && !$ctrl.item.canPurchase) || $ctrl.item.isOwned === true">\r\n\t\t\t{{$ctrl.timer || \'Buy\'}}\r\n\t\t</button>\r\n\t</div>\r\n\t<div class="col-md-4 col-sm-10 col-xs-10" ng-bind="$ctrl.vm.description"></div>\r\n\t<div class="col-md-3 col-sm-6 col-xs-6">\r\n\t\t<p class="text-center" style="font-size: 1.2em"><strong>Costs:</strong></p>\r\n\t\t<ul class="list-group">\r\n\t\t\t<li class="list-group-item"\tng-repeat="cost in $ctrl.vm.costs" ng-bind="cost"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class="col-md-3 col-sm-6 col-xs-6">\r\n\t\t<p class="text-center" style="font-size: 1.2em"><strong>Benefits:</strong></p>\r\n\t\t<ul class="list-group">\r\n\t\t\t<li class="list-group-item" ng-repeat="ben in $ctrl.vm.benefits" ng-bind="ben"></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>';
}, function (t, e) {
  t.exports = '<div class="panel panel-info">\r\n\t<div class="panel-heading"\r\n\t\t\t style="cursor: pointer;"\r\n\t\t\t ng-click="$ctrl.showPanel = !$ctrl.showPanel">\r\n\t\t<h3 class="panel-title">Buy Items</h3>\t\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.showPanel">\r\n\t\t<div class="btn-group" role="group" aria-label="...">\r\n\t\t\t<button type="button" class="btn btn-default"\r\n\t\t\t\t\t\t\tng-repeat="(name,show) in $ctrl.sections"\r\n\t\t\t\t\t\t\tng-class="{\'btn-info\': show}"\r\n\t\t\t\t\t\t\tng-click="$ctrl.showSection(name)">{{name}}</button>\r\n\t\t</div>\r\n\t\t<buy-table ng-repeat="(name,show) in $ctrl.sections"\r\n\t\t\t\t\t\t\titems="$ctrl[name.toLowerCase()]"\r\n\t\t\t\t\t\t\tng-show="show"></buy-table>\r\n\t</div>\r\n</div>\r\n';
}, function (t, e) {
  t.exports = '<div class="dropdown" style="margin-top: 10px; margin-bottom: 10px;">\r\n\t<button class="btn btn-default dropdown-toggle" type="button" id="sortDropdown"\r\n\t\t\t\t\tdata-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\r\n\t\tSort...\r\n\t</button>\r\n\t<ul class="dropdown-menu" aria-labelledby="sortDropdown" style="cursor: pointer;">\r\n\t\t<li><a ng-click="$ctrl.sortTable(\'name\')">Name</a></li>\r\n\t\t<li><a ng-click="$ctrl.sortTable(\'category\')">Category</a></li>\r\n\t\t<li><a ng-click="$ctrl.sortTable(\'price\')">Value</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n<ul class="list-group">\r\n\t<li class="list-group-item buy-item" ng-repeat="item in $ctrl.items" ng-hide="!item.cost.length || item.isUnlocked === false"\r\n\t\t\tng-class="{\'list-group-item-success\': item.isAffordable && !item.isOwned, \'list-group-item-info\': !item.isAffordable && !item.isOwned}">\r\n\t\t<buy-item item="item"></buy-item>\r\n\t\t<!--<buy-item-header item="item"></buy-item-header>\r\n\t\t<buy-item-details item="item"></buy-item-details>-->\r\n\t</li>\r\n</ul>\r\n';
}, function (t, e) {
  t.exports = '<div class="panel panel-info">\r\n\t<div class="panel-heading" style="cursor: pointer;"\r\n\t\t\t ng-click="$ctrl.showPanel = !$ctrl.showPanel">\r\n\t\t<h4 class="panel-title">Inventory</h4>\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.showPanel">\r\n\t\t<table class="table table-striped table-bordered">\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Amount</th>\r\n\t\t\t\t<th>Recruit Chance</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr ng-repeat="(key,value) in $ctrl.inventory"\r\n\t\t\t\t\tng-show="value">\r\n\t\t\t\t<td>{{key}}</td>\r\n\t\t\t\t<td>{{value}}</td>\r\n\t\t\t\t<td>{{($ctrl.recruiters[key] > 100 && \'100\') || $ctrl.recruiters[key].toFixed(2) || \'0\'}}%</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n'
;
}, function (t, e) {
  t.exports = '<div class="panel panel-info">\r\n\t<div class="panel-heading" ng-click="$ctrl.showPanel = !$ctrl.showPanel">\r\n\t\t<h4 class="panel-title">\r\n\t\t\tResources\r\n\t\t\t<span style="font-size: 0.8em">\r\n\t\t\t\t<span ng-repeat="(key,value) in $ctrl.resourceTypes">\r\n\t\t\t\t\t|&nbsp;{{value.charAt(0).toUpperCase() + value.slice(1)}}: {{$ctrl.stats.resources[value] | number: 0}}&nbsp;\r\n\t\t\t\t</span>\r\n\t\t\t</span>\r\n\t\t</h4>\r\n\t</div>\r\n\t<!--<div class="panel-body" ng-show="$ctrl.showPanel">\r\n\t\t<table class="table table-bordered">\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Amount</th>\r\n\t\t\t\t<th>Rate</th>\r\n\t\t\t\t<th>Multiplier</th>\r\n\t\t\t\t<th>Actual Rate</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr ng-repeat="(key,value) in $ctrl.resourceTypes">\r\n\t\t\t\t<td>{{value.charAt(0).toUpperCase() + value.slice(1)}}</td>\r\n\t\t\t\t<td>{{$ctrl.stats.resources[value] | number: 2}}</td>\r\n\t\t\t\t<td>{{$ctrl.stats.generators[value] | number: 2}}</td>\r\n\t\t\t\t<td>{{$ctrl.stats.multipliers[value] | number: 2}}</td>\r\n\t\t\t\t<td>{{$ctrl.stats.multipliers[value] * $ctrl.stats.generators[value] | number: 2}}</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>-->\r\n</div>\r\n';
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, n(25), e.FooterComponent = {template: n(36), controller: function () {
    this.year = (new Date()).getFullYear();
  }};
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, n(26), e.HeaderComponent = {template: n(37)}
;
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.icons = [new i("https://github.com/jkachurek", "static/images/github-logo.svg"), new i("https://www.linkedin.com/in/john-kachurek", "static/images/linkedin-logo.svg"), new i("http://stackoverflow.com/users/6599088/jkachurek", "static/images/stackoverflow.svg"), new i("mailto:john.kachurek@gmail.com", "static/images/close-envelope.svg")], t.navLinks = [o.Routes.Blog, o.Routes.Skills, o.Routes.Resume, o.Routes.Projects];
  }e.__esModule = !0; var o = n(15); n(27), e.NavComponent = {template: n(38), controller: r}; var i = (function () {
    function t(t, e) {
      this.link = t, this.img = e
;
    } return t;
  })()
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; const r = n(14); n(28), e.RecentBlogs = {template: n(39), controller: function () {
    const t = this; t.$onInit = function () {
      t.posts = r.default.getRecentPosts(3)
;
    };
  }}
;
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.icons = [new o("https://github.com/jkachurek", "static/images/github-logo.svg"), new o("https://www.linkedin.com/in/john-kachurek", "static/images/linkedin-logo.svg"), new o("http://stackoverflow.com/users/6599088/jkachurek", "static/images/stackoverflow.svg"), new o("mailto:john.kachurek@gmail.com", "static/images/close-envelope.svg")];
  }e.__esModule = !0, n(29), e.Sidebar = {template: n(40), controller: r}; var o = (function () {
    function t(t, e) {
      this.link = t, this.img = e
;
    } return t
;
  })()
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, e.BlogPostPreview = {bindings: {post: "<"}, template: n(41)}
;
}, function (t, e, n) {
  "use strict"; function r(t, e) {
    const n = this; n.$onInit = function () {
      t.id && (n.post = o.default.getById(~~t.id)), n.post || e.go("blog");
    }, n.scrollToTop = function () {
      document.querySelector("blog-post").scrollIntoView({behavior: "smooth", block: "start"})
;
    }
;
  }e.__esModule = !0; var o = n(14); e.BlogPost = {bindings: {post: "<"}, template: n(42), controller: r}, r.$inject = ["$stateParams", "$state"];
}, function (t, e, n) {
  "use strict"; function r(t) {
    let e = this,
      n = 5; e.pages = [], e.$onInit = function () {
        t.tag ? (e.currentTag = t.tag, e.blogPosts = o.default.getByExpression(e => {
          return ~e.tags.indexOf(t.tag)
;
        }) || o.default.getAll()) : e.blogPosts = o.default.getAll(), e.tags = o.default.getTagData(); for (let r = 0; r < Math.ceil(e.blogPosts.length / n); r++) {
          e.pages.push(e.blogPosts.slice(r * n, r * n + n));
        } e.goToPage(0);
      }, e.goToPage = function (t) {
        e.pages[t] && (document.querySelector(".ui-view").scrollIntoView({behavior: "smooth", block: "start"}), e.currentPageNumber = t, e.currentPage = e.pages[t]);
      };
  }e.__esModule = !0; var o = n(14); n(30), e.BlogComponent = {template: n(43), controller: r}, r.$inject = ["$stateParams"]
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(63),
    i = n(62),
    s = n(61); e.Blog = "blog", r.module(e.Blog, []).component("blog", o.BlogComponent).component("blogPost", i.BlogPost).component("blogPostPreview", s.BlogPostPreview);
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(66); e.Projects = "projects", r.module(e.Projects, []).component("projects", o.ProjectsComponent)
;
}, function (t, e, n) {
  "use strict"; function r() {
    this.projects = o.default.getAll();
  }e.__esModule = !0; var o = n(86); n(31), e.ProjectsComponent = {template: n(44), controller: r};
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(69),
    i = n(68); e.Resume = "resume", r.module(e.Resume, []).component("resume", o.ResumeComponent).component("resumeItem", i.ResumeItem);
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, e.ResumeItem = {template: n(45), bindings: {item: "<"}}
;
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.$onInit = function () {
      t.sections = [new i("Work", "static/images/briefcase.svg", o.default.getByExpression(t => {
        return t.category === "work";
      })), new i("Engagement", "static/images/bullhorn.svg", o.default.getByExpression(t => {
        return t.category === "engagement";
      })), new i("Education", "static/images/mortarboard.svg", o.default.getByExpression(t => {
        return t.category === "education"
;
      }))], t.activeSection = t.sections[0]
;
    };
  }e.__esModule = !0; var o = n(87); n(32), e.ResumeComponent = {template: n(46), controller: r}; var i = (function () {
    function t(t, e, n) {
      this.name = t, this.img = e, this.contents = n
;
    } return t;
  })()
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(0),
    o = n(73),
    i = n(72),
    s = n(71); e.Skills = "skills", r.module(e.Skills, []).component("skills", o.SkillsComponent).component("skillPanel", i.SkillPanel).component("skillCategoryPanel", s.SkillCategoryPanel);
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, e.SkillCategoryPanel = {template: n(47), bindings: {category: "<", skills: "<"}, controller: function () {
    this.show = !0;
  }}
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0, e.SkillPanel = {template: n(48), bindings: {skill: "<"}}
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(88),
    o = n(18); n(33), e.SkillsComponent = {template: n(49), controller: function () {
      this.skills = {Languages: r.default.getByExpression(t => {
        return t.category === "Languages"
;
      }).sort(o.SortByProp("proficiency")), Frameworks: r.default.getByExpression(t => {
        return t.category === "Frameworks"
;
      }).sort(o.SortByProp("proficiency")), Tools: r.default.getByExpression(t => {
        return t.category === "Tools";
      }).sort(o.SortByProp("proficiency"))}, this.otherSkills = "In addition to the above skills, I have dabbled in several other frameworks and languages. I attended a RailsBridge event, which gave me a basic understanding of Ruby and Rails. I have also done tutorials and small projects using Electron, Python, Ember, Flask, and Vue.  While I do not have many fully-functioning applications using these skills, I have applied much of what I learned with them to my other work.";
    }};
}, function (t, e, n) {
  "use strict"; function r(t, e) {
    function n() {
      a.game.Update(), s.CheckAllItemsAffordability(), t.$broadcast("tick");
    } function r() {
      a.game.FixedUpdate()
;
    } var a = this; a.$onInit = function () {
      a.game = new o.Game(), a.updateTimer = e(n, i.GameSettings.tick), a.fixedUpdateTimer = e(r, 1e3);
    }, a.resourceButton = function (t) {
      a.game.Click(t.toUpperCase());
    }, a.cheat = function () {
      for (let t = 0; t < 1e4; t++) {
        a.game.Click("MONEY"), a.game.Click("POWER")
;
      }
    }
;
  }e.__esModule = !0; var o = n(80),
    i = n(6),
    s = n(5); n(34), e.App = {template: n(50), controller: r}, r.$inject = ["$scope", "$interval"];
}, function (t, e, n) {
  "use strict"; function r(t) {
    const e = this; e.$onInit = function () {
      e.vm = new d(e.item);
    }, e.buy = function () {
      e.item.buy(), e.vm = new d(e.item), e.item instanceof s.Ritual && (e.timer = u.Numbers.MillisecondToSecond(e.item.duration), e.timerInterval = setInterval(() => {
        e.timer--, e.timer === 0 && clearInterval(e.timerInterval);
      }, 1e3)), c.CheckAllItemsAffordability();
    }, t.$on("tick", () => {
      e.vm = new d(e.item)
;
    })
;
  } function o(t) {
    return t instanceof l.ResourceConstant ? `+${t.amount} ${t.type}` : t instanceof l.Generator ? `+${t.amount} ${t.type} / sec` : t instanceof l.Multiplier ? `x${u.Numbers.RoundToPrecision(t.amount, 2).toLocaleString()} ${t.type}` : t instanceof l.Recruiter ? `${u.Numbers.RoundToPrecision(t.amount, 2).toLocaleString()}% chance to recruit one ${t.type}` : t instanceof l.CategoryMultiplier ? `x${u.Numbers.RoundToPrecision(t.amount, 2).toLocaleString()} productivity for ${t.type} items` : void 0
;
  } function i(t) {
    const e = `${t.amount.toLocaleString()} ${t.type}`; return t instanceof a.UnitCost && t.amount > 1 ? u.Strings.Pluralize(e) : e;
  }e.__esModule = !0; var s = n(4),
    a = n(9),
    l = n(3),
    c = n(5),
    u = n(7); e.BuyItem = {template: n(51), bindings: {item: "<"}, controller: r}, r.$inject = ["$scope"]; var d = (function () {
      function t(t) {
        this.costs = [], this.benefits = [], this.name = t.name, this.description = t.description, this.costs = t.cost.map(i), this.benefits = t.benefits.map(o), this.header = t.amountOwned > 0 ? ` | Owned: ${t.amountOwned}` : "", this.header += ` | Costs: ${t.cost.map(i).join(", ")}`, t instanceof s.Ritual && this.benefits.unshift(`Lasts ${t.duration / 1e3} seconds`)
;
      } return t;
    })()
;
}, function (t, e, n) {
  "use strict"; function r() {
    function t(t) {
      for (const n in e.sections) {
        e.sections.hasOwnProperty(n) && (e.sections[n] = n === t && !e.sections[n])
;
      }
    } var e = this; e.showSection = t, e.locations = o.Database.filter(t => {
      return t instanceof i.Location;
    }), e.rituals = o.Database.filter(t => {
      return t instanceof i.Ritual;
    }), e.units = o.Database.filter(t => {
      return t instanceof i.Unit
;
    }), e.upgrades = o.Database.filter(t => {
      return t instanceof i.Upgrade
;
    }), e.sections = {Locations: !1, Rituals: !1, Units: !1, Upgrades: !1}
;
  }e.__esModule = !0; var o = n(16),
    i = n(4); e.BuyPanel = {template: n(52), controller: r}
;
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.sortTable = function (e) {
      let n; switch (e) {
        case "name":case "category":default:n = e
;
      }t.items; t.items = t.items.sort((t, e) => {
        return t[n] > e[n] ? 1 : t[n] < e[n] ? -1 : 0
;
      })
;
    }
;
  }e.__esModule = !0, e.BuyTable = {template: n(53), bindings: {items: "<"}, controller: r}
;
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.inventory = o.PlayerData.inventory, t.recruiters = o.PlayerData.recruiters;
  }e.__esModule = !0; var o = n(2); e.InventoryComponent = {template: n(54), controller: r};
}, function (t, e, n) {
  "use strict"; function r() {
    const t = this; t.stats = o.PlayerData, t.resourceTypes = s.Objects.CapitalizePropertyNames(i.Resources);
  }e.__esModule = !0; var o = n(2),
    i = n(1),
    s = n(7); e.ResourcesComponent = {template: n(55), controller: r};
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(2),
    o = n(1),
    i = n(6),
    s = n(5),
    a = n(3),
    l = (function () {
      function t() {
        s.CheckAllItemsUnlocked()
;
      } return t.prototype.Update = function () {
        r.PlayerData.inventory.forEach(t => {
          t.tick();
        }), s.CheckAllItemsUnlocked()
;
      }, t.prototype.FixedUpdate = function () {
        r.PlayerData.inventory.forEach(t => {
          t.tickables.forEach(e => {
            e instanceof a.Recruiter && e.tick(t.amountOwned)
;
          })
;
        });
      }, t.prototype.Click = function (t) {
        r.PlayerData.resources[o.Resources[t]] += i.GameSettings.clickAmount, s.CheckAllItemsAffordability();
      }, t
;
    })(); e.Game = l;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(1),
    i = n(4),
    s = n(9),
    a = n(3),
    l = n(13),
    c = n(8); !(function (t) {
      t.Chapel = new i.Location(o.Items.Locations.Chapel, "A small place of worship", o.Categories.Neutral, [new s.Cost(o.Resources.MONEY, 50)], [new a.ResourceConstant(o.Resources.INFLUENCE, 10)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 15), new l.UnitRequirement(o.Items.Units.Cultist, 3)], [o.Items.Units.Preacher, o.Items.Units.Acolyte])), t.OfficePark = new i.Location(o.Items.Locations.OfficePark, "A small neighborhood office park.", o.Categories.Business, [new s.Cost(o.Resources.MONEY, 200)], [new a.ResourceConstant(o.Resources.INFLUENCE, 25), new a.CategoryMultiplier(o.Categories.Business, 1.05)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 35), new l.UnitRequirement(o.Items.Units.Member, 12)], [o.Items.Units.Businessman])), t.School = new i.Location(o.Items.Locations.School, "A place of learning", o.Categories.Education, [new s.Cost(o.Resources.MONEY, 200)], [new a.ResourceConstant(o.Resources.INFLUENCE, 30), new a.CategoryMultiplier(o.Categories.Education, 1.03)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 40), new l.UnitRequirement(o.Items.Units.Member, 15), new l.UnitRequirement(o.Items.Units.Schoolteacher, 3)], [])), t.Skyscraper = new i.Location(o.Items.Locations.Skyscraper, "It's pretty tall", o.Categories.Business, [new s.Cost(o.Resources.MONEY, 1e3), new s.Cost(o.Resources.POWER, 400)], [new a.ResourceConstant(o.Resources.INFLUENCE, 100), new a.CategoryMultiplier(o.Categories.Business, 1.1)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 400), new l.UnitRequirement(o.Items.Units.Businessman, 10), new l.ResourceRequirement(o.Resources.MONEY, 1e4), new l.ResourceRequirement(o.Resources.POWER, 1200)], [])), t.Church = new i.Location(o.Items.Locations.Church, "DESCRIPTION PENDING", o.Categories.Religion, [new s.Cost(o.Resources.MONEY, 350), new s.Cost(o.Resources.POWER, 30)], [new a.ResourceConstant(o.Resources.INFLUENCE, 75), new a.Generator(o.Resources.POWER, 5), new a.CategoryMultiplier(o.Categories.Religion, 1.1)], new l.UnlockInfo([new l.UnitRequirement(o.Items.Units.Preacher, 5), new l.UnitRequirement(o.Items.Units.Acolyte, 3), new l.UnitRequirement(o.Items.Locations.Chapel, 3), new l.ResourceRequirement(o.Resources.INFLUENCE, 350), new l.ResourceRequirement(o.Resources.POWER, 2e3)], []));
    })(r = e.Locations || (e.Locations = {})); const u = []; for (const d in r) {
      r.hasOwnProperty(d) && u.push(r[d]);
    } const p = new c.default(u); e.default = p;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(1),
    i = n(4),
    s = n(9),
    a = n(3),
    l = n(17),
    c = n(8); !(function (t) {
      t.Screed = new i.Ritual(o.Items.Rituals.Screed, "An impassioned blog post about your beliefs", o.Categories.Neutral, [new s.Cost(o.Resources.MONEY, 20)], [new a.Generator(o.Resources.MONEY, 1), new a.Multiplier(o.Resources.MONEY, 1.1)], 10), t.Vlog = new i.Ritual(o.Items.Rituals.Vlog, "A perfectly reasonable, well-thought-out speech delivered by video to all of your followers", o.Categories.Neutral, [new s.Cost(o.Resources.MONEY, 30)], [new a.Generator(o.Resources.MONEY, 1), new a.Multiplier(o.Resources.MONEY, 1.2)], 15), t.Sacrifice = new i.Ritual(o.Items.Rituals.Sacrifice, "A human sacrifice", o.Categories.Occult, [new s.Cost(o.Resources.POWER, 100), new s.UnitCost(o.Items.Units.Member, 5)], [new a.ResourceConstant(o.Resources.MONEY, 100), new a.Multiplier(o.Resources.MONEY, 1.5), new a.Multiplier(o.Resources.POWER, 1.3)], 15, new l.Alignment(o.Alignments.ELDRITCH, 12));
    })(r = e.Rituals || (e.Rituals = {})); const u = []; for (const d in r) {
      r.hasOwnProperty(d) && u.push(r[d]);
    } const p = new c.default(u); e.default = p
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(1),
    i = n(4),
    s = n(9),
    a = n(3),
    l = n(13),
    c = n(17),
    u = n(8); !(function (t) {
      t.Member = new i.Unit(o.Items.Units.Member, "A true believer who is willing to shell out cold hard cash to learn about the dead aliens infesting their soul", o.Categories.Neutral, [new s.Cost(o.Resources.MONEY, 10)], [new a.ResourceConstant(o.Resources.INFLUENCE, 1), new a.Generator(o.Resources.MONEY, 1)], new l.UnlockInfo([], [o.Items.Units.Cultist, o.Items.Units.Businessman, o.Items.Units.Schoolteacher])), t.Cultist = new i.Unit(o.Items.Units.Cultist, "A member who is willing to share their beliefs with others to grant you favor with the big bundle of tentacles upstairs.", o.Categories.Occult, [new s.Cost(o.Resources.MONEY, 10), new s.UnitCost(t.Member.name, 1)], [new a.ResourceConstant(o.Resources.INFLUENCE, 2), new a.Generator(o.Resources.POWER, 1)], new l.UnlockInfo([new l.UnitRequirement(o.Items.Units.Member, 3)], [o.Items.Units.Acolyte]), new c.Alignment(o.Alignments.ELDRITCH, 5)), t.Acolyte = new i.Unit(o.Items.Units.Acolyte, "A fancy cultist", o.Categories.Occult, [new s.Cost(o.Resources.POWER, 10), new s.Cost(o.Resources.MONEY, 10), new s.UnitCost(o.Items.Units.Cultist, 1)], [new a.ResourceConstant(o.Resources.INFLUENCE, 5), new a.Generator(o.Resources.POWER, 3)], new l.UnlockInfo([new l.UnitRequirement(o.Items.Units.Cultist, 4), new l.UnitRequirement(o.Items.Locations.Chapel, 1), new l.ResourceRequirement(o.Resources.INFLUENCE, 50), new l.ResourceRequirement(o.Resources.POWER, 75), new l.AlignmentRequirement(o.Alignments.ELDRITCH, 20)], []), new c.Alignment(o.Alignments.ELDRITCH, 8)), t.Preacher = new i.Unit(o.Items.Units.Preacher, "Often seen in their natural habitat of street corners and abortion clinics, these people will tell anyone who listens about their love for the bearded guy above", o.Categories.Religion, [new s.Cost(o.Resources.MONEY, 50), new s.UnitCost(t.Cultist.name, 1)], [new a.ResourceConstant(o.Resources.INFLUENCE, 3), new a.Generator(o.Resources.POWER, 2), new a.Recruiter(o.Items.Units.Member, 0.5)], new l.UnlockInfo([new l.UnitRequirement(o.Items.Locations.Chapel, 1)], [])), t.Bishop = new i.Unit(o.Items.Units.Bishop, "DESCRIPTION PENDING", o.Categories.Religion, [], [], new l.UnlockInfo([], []), null), t.Cardinal = new i.Unit(o.Items.Units.Cardinal, "DESCRIPTION PENDING", o.Categories.Religion, [], [], new l.UnlockInfo([], []), null), t.Pope = new i.Unit(o.Items.Units.Pope, "DESCRIPTION PENDING", o.Categories.Religion, [], [], new l.UnlockInfo([], []), null), t.Businessman = new i.Unit(o.Items.Units.Businessman, "Promotes your beliefs through his business practices.  You can find his number on his eggshell business card.", o.Categories.Business, [new s.Cost(o.Resources.MONEY, 50)], [new a.ResourceConstant(o.Resources.INFLUENCE, 8), new a.Generator(o.Resources.MONEY, 8)], new l.UnlockInfo([new l.UnitRequirement(o.Items.Units.Member, 10)], [o.Items.Units.UpperManagement, o.Items.Locations.OfficePark])), t.UpperManagement = new i.Unit(o.Items.Units.UpperManagement, "They can see the chemtrails perfectly from their office on the top floor. This ally will make sure all their contracts sell customers' souls to the ancient one.", o.Categories.Business, [new s.UnitCost(o.Items.Units.Businessman, 1), new s.Cost(o.Resources.MONEY, 100), new s.Cost(o.Resources.POWER, 20)], [new a.ResourceConstant(o.Resources.INFLUENCE, 15), new a.Generator(o.Resources.MONEY, 12), new a.Recruiter(o.Items.Units.Businessman, 0.3)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 300), new l.UnitRequirement(o.Items.Units.Businessman, 10), new l.UnitRequirement(o.Items.Locations.OfficePark, 2)], [o.Items.Locations.Skyscraper])), t.Schoolteacher = new i.Unit(o.Items.Units.Schoolteacher, "This loyal subject will make sure their students know that man didn't descend from monkeys. It's obvious from our vestigial tentacles that we are descended from Cthulu himself.", o.Categories.Education, [new s.Cost(o.Resources.MONEY, 60)], [new a.ResourceConstant(o.Resources.INFLUENCE, 8), new a.Generator(o.Resources.POWER, 1), new a.Generator(o.Resources.MONEY, 1), new a.Recruiter(o.Items.Units.Member, 0.2)], new l.UnlockInfo([new l.ResourceRequirement(o.Resources.INFLUENCE, 100), new l.UnitRequirement(o.Items.Units.Member, 12)], [o.Items.Locations.School])), t.Reporter = new i.Unit(o.Items.Units.Reporter, "DESCRIPTION PENDING", o.Categories.MassMedia, [], [], new l.UnlockInfo([], []), null), t.RadioHost = new i.Unit(o.Items.Units.RadioHost, "DESCRIPTION PENDING", o.Categories.MassMedia, [], [], new l.UnlockInfo([], []), null), t.NewsAnchor = new i.Unit(o.Items.Units.NewsAnchor, "DESCRIPTION PENDING", o.Categories.MassMedia, [], [], new l.UnlockInfo([], []), null), t.Pundit = new i.Unit(o.Items.Units.Pundit, "DESCRIPTION PENDING", o.Categories.MassMedia, [], [], new l.UnlockInfo([], []), null), t.MediaMogul = new i.Unit(o.Items.Units.MediaMogul, "DESCRIPTION PENDING", o.Categories.MassMedia, [], [], new l.UnlockInfo([], []), null), t.Mayor = new i.Unit(o.Items.Units.Mayor, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null), t.Governor = new i.Unit(o.Items.Units.Governor, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null), t.Congressman = new i.Unit(o.Items.Units.Congressman, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null), t.Senator = new i.Unit(o.Items.Units.Senator, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null), t.Judge = new i.Unit(o.Items.Units.Judge, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null), t.President = new i.Unit(o.Items.Units.President, "DESCRIPTION PENDING", o.Categories.Politics, [], [], new l.UnlockInfo([], []), null)
;
    })(r = e.Units || (e.Units = {})); const d = []; for (const p in r) {
      r.hasOwnProperty(p) && d.push(r[p]);
    } const m = new u.default(d); e.default = m
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(1),
    i = n(4),
    s = n(8); !(function (t) {
      t.Basement = new i.Upgrade(o.Items.Upgrades.Basement, "Sure, it's dingy, but Mom and Dad say you can stay as long as you like, and they make a mean meatloaf.", o.Categories.Neutral, [], []), t.StorageLocker = new i.Upgrade(o.Items.Upgrades.StorageLocker, "Sure, it doesn't have a ventilation system or running water, but it's better than ingesting the neurotoxins and fluoride.", o.Categories.Neutral, [], [])
;
    })(r = e.Upgrades || (e.Upgrades = {})); const a = []; for (const l in r) {
      r.hasOwnProperty(l) && a.push(r[l]);
    } const c = new s.default(a); e.default = c
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(1),
    o = (function () {
      function t() {
        this.resources = {}, this.multipliers = {}, this.generators = {}, this.inventory = [], this.alignment = {}, this.recruiters = {}; for (var t in r.Resources) {
          r.Resources.hasOwnProperty(t) && (this.resources[r.Resources[t]] = 0, this.generators[r.Resources[t]] = 0, this.multipliers[r.Resources[t]] = 1);
        } for (var t in r.Alignments) {
          r.Alignments.hasOwnProperty(t) && (this.alignment[r.Alignments[t]] = 0)
;
        }
      } return t
;
    })(); e.PlayerData = o;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r = n(92),
    o = n(10),
    i = [new r.default("Transceiver Retriever", "January 2018", "The theme for Global Game Jam 2018 was \"transmission,\" so my team created a game where you control a robot and attempt to retrieve a briefcase from an office.  The catch is that you only see the game from the perspective of the security cameras in the office, so you need to adapt how you control the robot and create a mental map of the level as you play.  Given the time limit, I am extremely satisfied with how this project turned out.  You can find a downloadable version of the game at the link below.", ["Unity Engine", "C#"], "https://globalgamejam.org/2018/games/transceiver-retriever", []), new r.default("This Website", "Redesigned in Winter 2017", "You're looking at it.  This website is built using several things, most notably Angular 1.6.x, TypeScript, SASS, Webpack,& Gulp.  The site is component-based, as you can see in the source code linked below.  I am currently working on redesigning it yet again in React, since I use it professionally and I prefer it personally.", ["Angular 1.6", "TypeScript"], "https://github.com/jkachurek/jkachurek.github.io", []), new r.default("Cult Simulator", "February 2017 - May 2017", "A clicker/incremental game where the theme is building up a cult and expanding your empire. This was my first time using TypeScript to make something with a large amount of logic. It taught me a great deal about all the OOP-style features that TS includes, which made it much easier to code a game. The game needs more content and balancing, but the core mechanics of it are solid. If you want to give it a shot, click the link below!  The source code for this playable version is in a folder of this website's repository if you want to give it a look.", ["Angular 1.6", "TypeScript"], "/cultSim"), new r.default("Synth Wave Rider", "January 2017", "A simple, rhythm-based game created using Unity Engine for the 2017 Global Game Jam.  I was one of two programmers, along with a designer and a musician.  My first actual project using Unity, it taught me a lot in the two-day time limit of the Game Jam. The link features a downloadable version of the game.", ["Unity Engine", "C#"], "http://globalgamejam.org/2017/games/synth-wave-rider", []), new r.default("xFid Encryption Application", "Summer 2016", "One of my first side projects ever from when I was just learning C#.  tFrom time to time, I have been working on porting this project to a website application built with TypeScript. This is an experimental console application expanding the functionality of a traditional trifid cipher from 3x3x3 to 5x5x5, with support for encrypting digits, specific casing, and a selection of punctuation\tand Latin characters. It allows for random cipher generation, saving created keys and messages, and encrypting through multiple passes of the same key. This allows the user to have 125 factorial potential solutions to a single encryption, times the number of times the message is passed through the cipher.", ["C#", ".NET Framework"], "https://github.com/jkachurek/xFid", [].map(t => {
      return `static/images/projects/xfid/${t}`;
    }))]; i.forEach((t, e) => {
      return t.id = i.length - e;
    }); const s = new o.default(i); e.default = s;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(91),
    i = n(10); !(function (t) {
      t.WORK = "work", t.EDUCATION = "education", t.ENGAGEMENT = "engagement";
    })(r || (r = {})); const s = [new o.default(r.WORK, "Insight2Profit", "Application Developer", "April 2018 - Present", ["Lead front-end developer for our CPQ application built with React & Redux", "Support & bug fixes for legacy application built with Knockout", "Reworking the React application to work with new services architecture built around MongoDB", "Building a reusable UI component library to help us quickly make custom CPQ front ends for clients", "Specific technologies used: React, Redux, Styled Components, Jasmine, Karma, Webpack, SASS, Webpack, MongoDB, Knockout, jQuery", "Tools used: Visual Studio, VS Code, SSMS, Postman, MongoDB Compass"]), new o.default(r.WORK, "AmTrust Financial Services", "Software Engineer I", "August 2016 - March 2018", ["Working across the stack with a variety of enterprise .NET web applications, with a focus on the front end.", "Building functionality of agent-facing web apps using Angular, jQuery, & ASP.NET MVC.", "Creating RESTful APIs and connecting them to front ends.", "Refactoring applications to use modern, component-based front ends.", "Specific technologies used: ASP.NET MVC, WebAPI, Angular 1.6.x, jQuery, SQL Server, Web Forms", "Tools used: Visual Studio, Visual Studio Code, SQL Server Management Studio, Postman"]), new o.default(r.WORK, "Sporcle Live Trivia", "Trivia Host", "June 2015 - Present", ["Hosting weekly trivia shows around the Greater Cleveland Area."]), new o.default(r.WORK, "Cleveland International Film Festival", "Theater Operations Staff (seasonal)", "2016 - Present", ["Seasonal staff position for about a week and a half in March/April", "Assisting patrons in finding their destinations around the festival.", "Helping to run individual theaters by managing the flow of patrons, scanning passes, and making sure everything runs on time."]), new o.default(r.WORK, "WBWC 88.3 FM The Sting", "Various Board Positions (see below)", "September 2010 - May 2015", ["Promotions Director, Spring 2015: Contacting venue promoters, procuring & scheduling giveaways, and coordinating, conducting, & producing interviews", "Production Director, Fall 2011 - Spring 2012: Managing station equipment, producing sweeps, underwritings, promos, and more.", "Music Director, Summer 2011: Contacting music promoters and helping decide what music is played on the station."]), new o.default(r.EDUCATION, "The Software Guild", ".NET/C# Apprentice", "May 2016 - August 2016", ["Learned a variety of practical skills for modern software development through an intensive program led by industry professionals.", "Learned industry standard tools and practices, including Agile and Test-Driven Development."]), new o.default(r.EDUCATION, "Baldwin Wallace University", "Broadcasting & Mass Communications", "2010 - 2015", ["Board Member, WBWC 88.3 FM The Sting", "Pi Lambda Phi Fraternity"]), new o.default(r.EDUCATION, "Hawken School, Gates Mills, OH", null, "Graduated 2010", ["National Merit Scholar"]), new o.default(r.ENGAGEMENT, "Global Game Jam", null, "2017 - Present", ["I participate in the annual jam hosted by Cleveland Game Devs", "Worked on teams to create games in Unity over the course of two days each January", "See the Projects page for more info on the games that I have made"]), new o.default(r.ENGAGEMENT, "RailsBridge", null, "2016", ["Participated in 2016's RailsBridge event in Cleveland", "Learned the basics of setting up a Ruby On Rails dev environment, scaffolding, building, and deploying a small web app."]), new o.default(r.ENGAGEMENT, "Cleveland International Film Festival", "Volunteer", "2014 - 2015", ["I was a seasonal volunteer for two years before moving up to seasonal staff."])]; s.forEach((t, e) => {
      return t.id = s.length - e;
    }); const a = new i.default(s); e.default = a
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; let r,
    o = n(93),
    i = n(10); !(function (t) {
      t.LANGUAGE = "Languages", t.FRAMEWORK = "Frameworks", t.TOOL = "Tools";
    })(r || (r = {})); const s = [new o.default("Angular 1.x", 7, r.FRAMEWORK, "I have used AngularJS extensively in personal and work projects.  I have used versions betweeen 1.3.x and 1.6.x, so I am comfortable with a wide range of standards for the framework.  My projects using it have included complex insurance applications, simple websites (like this one), and even browser games like my Cult Simulator project (see the Projects page for details)."), new o.default("Angular 2+", 5, r.FRAMEWORK, "I have not worked with modern Angular as much as I have with Angular 1.x, but I am still very comfortable with it.  I have used it for a complex web application at work and for multiple side projects.  In addition, I have used it in conjunction with Redux."), new o.default(".NET", 6, r.FRAMEWORK, "I have used the .NET Framework almost exclusively for the purpose of making web applications, so I am not as familiar with the other ways it can be used.  But, given the chance, it should not be hard to learn, given my familiarity with .NET MVC."), new o.default(".NET Core", 5, r.FRAMEWORK, "I have done multiple tutorials for .NET Core, and have mocked up alternate version of both side projects and work-related applications using .NET Core in conjunction with Angular 2.  I am mostly comfortable with this due to its similarity to the regular .NET Framework, and how well it works with the Node ecosystem."), new o.default("React", 9, r.FRAMEWORK, "I use React daily for my job and am extremely comfortable in its ecosystem.  As time permits, I am working on transitioning this site to use React rather than Angular.  I am also working on getting comfortable with the Hooks API introduced in the 16.8 alpha.  I regularly use React with React-Redux, Styled Components, React Router, Storybook, Jest, and Axios, among others."), new o.default("Redux", 9, r.FRAMEWORK, "I have worked with Redux in both React and Angular, but mostly in React.  I am comfortable with several related libraries, including thunk, redux-saga, redux-forms, and reselect."), new o.default("C#", 6, r.LANGUAGE, "I am very comfortable with C# for web applications and architecture.  I am still learning\n\t\t\tmore about using C# to develop more complex backend functionality, and to create non-web\n\t\t\tapplications."), new o.default("JavaScript", 10, r.LANGUAGE, "I use JavaScript daily at work and on side projects, mostly with React.  I am comfortable with vanilla JS as well as more recent specs like ES6.  I enjoy writing utility functions in vanilla JS to extend its functionality in ways that are framework-agnostic."), new o.default("TypeScript", 8, r.LANGUAGE, "I have used TypeScript mostly on personal projects, including this website and the Cult Simulator.\n\t\t\tTypeScript helps me organize code and enforce consistency across my applications. I find it\n\t\t\tespecially useful because it makes it very easy to transition a codebase into C#, for example\n\t\t\tif I wanted to move a game from an HTML game to being made in Unity."), new o.default("SQL", 3, r.LANGUAGE, "I am proficient at using SQL for basic data access purposes, but have not worked with it extensively\n\t\t\tto perform complex operations and queries."), new o.default("CSS / SASS", 7, r.LANGUAGE, "I use CSS and SASS regularly for work and personal projects.  I am comfortable with making adjustments to styling and adding basic styles to components, but I have not had the opportunity to build a full, custom UI from the ground up.  I am hoping to get more experience with this soon.  I am also working on getting more comfortable with modern specs like Flexbox and CSS Grids."), new o.default("Visual Studio", 7, r.TOOL, "I use Visual Studio daily at work because of its ability to manage and build multiple large\n\t\t\tenterprise applications.  I am comfortable with its core functionality, but have yet to explore\n\t\t\tsome of its deeper features, especially when you combine it with the extended functionality\n\t\t\tof ReSharper."), new o.default("Git", 8, r.TOOL, "I am very comfortable using Git for source control, whether through the command line or\n\t\t\tthrough a Git client.  I am still very careful about doing more complex or destructive\n\t\t\toperations, but I am proficient enough for using it properly in a modern development\n\t\t\tenvironment."), new o.default("Node", 7, r.TOOL, "I have worked with NodeJS and NPM on almost every side project I have worked on, so I am\n\t\t\tvery comfortable with using it to create a wide variety of web applications.  I plan to\n\t\t\tuse it more for server-side code soon."), new o.default("SQL Server Management Studio", 4, r.TOOL, "I use SSMS at work to query our databases when developing and testing web\n\t\t\tapplications.  I have not used many of its more robust features, but am\n\t\t\tcomfortable performing basic operations with it."), new o.default("Unity 5.x", 3, r.TOOL, "I have done several tutorials and smaller projects with Unity.  I also used it for my Global Game Jam submissions in 2017 and 2018, which can be seen on my Projects page.  Though I have not produced a large project with it, I have a solid understanding of the scripting API thanks to my knowledge of C#.  I still have much to learn about the Unity Editor itself,\n\t\t\tespecially since the more artistic uses of it (animation, spritesheets, materials, etc.)\n\t\t\taren't exactly my specialty.  But overall, I understand it well enough to learn new things\n\t\t\twith it quickly.")];
  s.forEach((t, e) => {
    return t.id = s.length - e;
  }); const a = new i.default(s); e.default = a
;
}, function (t, e) {
  "use strict"; e.__esModule = !0; let n; !(function (t) {
    t.Angular = "angular1", t.Angular2 = "angular2", t.CSharp = "csharp", t.GameDev = "gamedev", t.JavaScript = "javascript", t.Projects = "projects", t.TypeScript = "typescript", t.WebDev = "webdev", t.PersonalWebsite = "personalSite", t.CultSimulator = "cultSimulator";
  })(n = e.Tags || (e.Tags = {}));
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t, e, n, r) {
      void 0 === r && (r = []), this.id = 0, this.title = t, this.date = e, this.bodyTemplate = n, this.tags = r;
    } return t.prototype.getDisplayDateTime = function () {
      return `${this.date.toLocaleDateString()}, ${this.date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}`;
    }, t;
  })(); e.BlogPost = n
;
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t, e, n, r, o) {
      this.id = 0, this.category = t, this.location = e, this.position = n, this.dates = r, this.header = [e, n, r].join("\n"), this.bullets = o;
    } return t;
  })(); e.default = n;
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t, e, n, r, o, i) {
      void 0 === r && (r = []), void 0 === o && (o = ""), void 0 === i && (i = []), this.title = t, this.date = e, this.description = n, this.tools = `Built with ${r.join(", ")}`, this.link = o, this.images = i;
    } return t
;
  })(); e.default = n
;
}, function (t, e) {
  "use strict"; e.__esModule = !0; const n = (function () {
    function t(t, e, n, r) {
      this.name = t, this.proficiency = e, this.category = n, this.details = r;
    } return t
;
  })(); e.default = n
;
}, function (t, e, n) {
  "use strict"; e.__esModule = !0; const r = n(0); n(11); let o = n(21),
    i = n(22),
    s = n(23),
    a = n(15),
    l = n(20); n(19), e.app = "app", r.module(e.app, ["ui.router", o.Common, i.Components, s.CultSim]).config(a.default).component("app", l.AppComponent)
;
}], [94]);
