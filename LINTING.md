# Angular ESLint & Stylelint Configuration

## 🎯 Текущие настройки линтеров для Angular

### ESLint Configuration

#### ✅ Активные Angular правила:

1. **Селекторы компонентов и директив:**
   - `@angular-eslint/component-selector` - компоненты должны использовать префикс `app-` и kebab-case
   - `@angular-eslint/directive-selector` - директивы должны использовать префикс `app` и camelCase

2. **Lifecycle методы:**
   - `@angular-eslint/no-empty-lifecycle-method` - запрещает пустые lifecycle методы
   - `@angular-eslint/use-lifecycle-interface` - требует использования интерфейсов для lifecycle

3. **Pipes:**
   - `@angular-eslint/use-pipe-transform-interface` - требует реализации PipeTransform

4. **TypeScript правила:**
   - `@typescript-eslint/no-explicit-any` - запрещает использование `any`
   - `@typescript-eslint/no-unused-vars` - предупреждает о неиспользуемых переменных
   - Naming conventions для классов, интерфейсов, функций

#### 🔍 HTML Template правила:

1. **Безопасность и корректность:**
   - `@angular-eslint/template/banana-in-box` - проверяет правильность двухстороннего связывания `[(ngModel)]`
   - `@angular-eslint/template/no-negated-async` - запрещает `!` с async pipe

2. **Производительность:**
   - `@angular-eslint/template/no-call-expression` - предупреждает о вызовах функций в шаблонах

3. **Сложность:**
   - `@angular-eslint/template/conditional-complexity` - ограничивает сложность условий (max 4)
   - `@angular-eslint/template/cyclomatic-complexity` - ограничивает цикломатическую сложность (max 10)

### Stylelint Configuration

#### ✅ Angular-специфичные правила:

1. **Селекторы:**
   - Поддержка Angular псевдо-элементов (`:host`, `:host-context`)
   - Поддержка `::ng-deep` для глубокой стилизации
   - Требование kebab-case для CSS классов

2. **SCSS поддержка:**
   - Полная поддержка SCSS синтаксиса
   - Правила для SCSS импортов

## 🚀 Рекомендации по использованию

### Для компонентов:

```typescript
// ✅ Правильно
@Component({
	selector: 'app-my-component', // kebab-case с префиксом app-
	templateUrl: './my-component.html',
	styleUrls: ['./my-component.scss']
})
export class MyComponent implements OnInit {
	ngOnInit(): void {
		// Обязательная реализация при использовании интерфейса
	}
}

// ❌ Неправильно
@Component({
	selector: 'myComponent' // нет префикса и неправильный case
})
export class myComponent {
	// неправильный naming
	ngOnInit() {
		// пустая реализация вызовет предупреждение
	}
}
```

### Для директив:

```typescript
// ✅ Правильно
@Directive({
	selector: '[appHighlight]' // camelCase с префиксом app
})
export class HighlightDirective {}
```

### Для шаблонов:

```html
<!-- ✅ Правильно -->
<input [(ngModel)]="value" />
<div *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</div>

<!-- ❌ Неправильно -->
<input ([ngModel)]="value" />
<!-- неправильные скобки -->
<div *ngFor="let item of items">{{ getValue(item) }}</div>
<!-- вызов функции -->
```

### Для стилей:

```scss
// ✅ Правильно
.my-component {
	color: #fff;

	:host {
		display: block;
	}

	::ng-deep .nested-component {
		background: #000;
	}
}

// ❌ Неправильно
.MyComponent {
	// должен быть kebab-case
	color: #ffffff; // должен быть короткий hex
}
```

## 📋 Дополнительные правила

В файле `eslint-angular-rules.js` находятся дополнительные правила, которые можно включить:

- Правила производительности (OnPush change detection)
- Дополнительные правила безопасности
- Расширенные правила для шаблонов

## 🔧 Команды для проверки

```bash
# Проверка TypeScript и HTML
bun run lint

# Автоисправление
bun run lint:fix

# Проверка стилей
bun run stylelint

# Форматирование
bun run format
```
