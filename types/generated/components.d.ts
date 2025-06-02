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

export interface DeliveryTypeDeliveryType extends Struct.ComponentSchema {
  collectionName: 'components_delivery_type_delivery_types';
  info: {
    displayName: 'deliveryType';
    icon: 'car';
  };
  attributes: {
    description: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['Pickup', 'Delivery']>;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
  };
  attributes: {
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
    description: '';
    displayName: 'perk';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
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
    date: Schema.Attribute.String & Schema.Attribute.DefaultTo<'June 25'>;
    description: Schema.Attribute.Text;
  };
}

export interface TestjonTestjon extends Struct.ComponentSchema {
  collectionName: 'components_testjon_testjons';
  info: {
    displayName: 'testjon';
    icon: 'bell';
  };
  attributes: {
    testjon: Schema.Attribute.String;
  };
}

export interface VariantVariant extends Struct.ComponentSchema {
  collectionName: 'components_variant_variants';
  info: {
    description: '';
    displayName: 'Variant item';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'variant description'>;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'variant tiile'>;
  };
}

export interface VariantgroupsVariantGroups extends Struct.ComponentSchema {
  collectionName: 'components_variantgroups_variant_groups';
  info: {
    description: '';
    displayName: 'Variant groups';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'variant group'>;
    variant: Schema.Attribute.Component<'variant.variant', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cmp.cmp': CmpCmp;
      'delivery-type.delivery-type': DeliveryTypeDeliveryType;
      'menu.menu': MenuMenu;
      'perk.perk': PerkPerk;
      'review.review': ReviewReview;
      'testjon.testjon': TestjonTestjon;
      'variant.variant': VariantVariant;
      'variantgroups.variant-groups': VariantgroupsVariantGroups;
    }
  }
}
