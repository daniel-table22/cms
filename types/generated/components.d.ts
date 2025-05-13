import type { Schema, Struct } from '@strapi/strapi';

export interface CmpCmp extends Struct.ComponentSchema {
  collectionName: 'components_cmp_cmps';
  info: {
    displayName: 'cmp';
    icon: 'bulletList';
  };
  attributes: {
    desc: Schema.Attribute.Blocks;
    price: Schema.Attribute.Decimal;
    tile: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PerkPerk extends Struct.ComponentSchema {
  collectionName: 'components_perk_perks';
  info: {
    displayName: 'perk';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ReviewReview extends Struct.ComponentSchema {
  collectionName: 'components_review_reviews';
  info: {
    description: '';
    displayName: 'review';
    icon: 'heart';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.DefaultTo<'San Francisco'>;
    date: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2025-05-08'>;
    description: Schema.Attribute.Text;
  };
}

export interface VariantVariant extends Struct.ComponentSchema {
  collectionName: 'components_variant_variants';
  info: {
    description: '';
    displayName: 'Variant item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String;
  };
}

export interface VariantgroupsVariantGroups extends Struct.ComponentSchema {
  collectionName: 'components_variantgroups_variant_groups';
  info: {
    displayName: 'Variant groups';
  };
  attributes: {
    variant: Schema.Attribute.Component<'variant.variant', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cmp.cmp': CmpCmp;
      'menu.menu': MenuMenu;
      'perk.perk': PerkPerk;
      'review.review': ReviewReview;
      'variant.variant': VariantVariant;
      'variantgroups.variant-groups': VariantgroupsVariantGroups;
    }
  }
}
